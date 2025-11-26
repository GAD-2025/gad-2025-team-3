console.log("--- SERVER CODE UPDATED ---");
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// 1. 🟢 필수 수정: .env 파일 경로 명시
require('dotenv').config(); 

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

// 2. ❌ 기존 const pool 선언 위치: 이 위치에서 선언하면 DB 연결 실패 시 서버 시작이 멈춥니다.
// const pool = mysql.createPool({...}); 


// 🟢 수정: Pool 객체를 담을 변수를 전역으로 선언
let pool; 

// ----------------------------------------------------------------------------------

// 🎯 메인 API 로직: DB 연결 풀(pool)을 사용하도록 수정
app.post('/api/signup', async (req, res) => {
    const { username, password, email, nickname, bio, age14, terms, privacy, marketing, selectedArtists } = req.body;

    if (!username || !password || !email || !nickname) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const connection = await pool.getConnection(); 
        await connection.beginTransaction();

        try {
            const [userResult] = await connection.execute(
                'INSERT INTO users (username, password, email, nickname, bio, age14, terms, privacy, marketing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [username, hashedPassword, email, nickname, bio, age14, terms, privacy, marketing]
            );

            const userId = userResult.insertId;

            if (selectedArtists && selectedArtists.length > 0) {
                const artistValues = selectedArtists.map(artistId => [userId, artistId]);
                await connection.query(
                    'INSERT INTO user_artists (user_id, artist_id) VALUES ?',
                    [artistValues]
                );
            }

            await connection.commit();
            connection.release();

            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            await connection.rollback();
            connection.release();
            console.error('Signup error:', error.stack);
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: 'Username, email, or nickname already exists.' });
            }
            res.status(500).json({ message: 'Internal server error: ' + error.message });
        }
    } catch (error) {
        console.error('Server error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE username = ?',
                [username]
            );

            if (rows.length === 0) {
                connection.release();
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

            const user = rows[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                connection.release();
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

            connection.release();

            // Do not send the password hash to the client
            const { password: _, ...userWithoutPassword } = user;
            res.status(200).json(userWithoutPassword);

        } catch (error) {
            connection.release();
            console.error('Login error:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.error('DB connection error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for creating an exhibition
app.post('/api/exhibitions', async (req, res) => {
    const { userId, title, description, startDate, endDate, isPublic, uploadedFiles } = req.body;

    if (!userId || !title || !startDate || !endDate) {
        return res.status(400).json({ message: 'Missing required exhibition fields.' });
    }

    try {
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        try {
            const [exhibitionResult] = await connection.execute(
                'INSERT INTO exhibitions (user_id, title, description, start_date, end_date, is_public) VALUES (?, ?, ?, ?, ?, ?)',
                [userId, title, description, startDate, endDate, isPublic]
            );

            const exhibitionId = exhibitionResult.insertId;

            if (uploadedFiles && uploadedFiles.length > 0) {
                const itemValues = uploadedFiles.map((fileUrl) => [exhibitionId, 'image', fileUrl]); // Assuming 'image' for now
                await connection.query(
                    'INSERT INTO exhibition_items (exhibition_id, item_type, item_url) VALUES ?',
                    [itemValues]
                );
            }

            await connection.commit();
            connection.release();
            res.status(201).json({ message: 'Exhibition created successfully', exhibitionId });

        } catch (error) {
            await connection.rollback();
            connection.release();
            console.error('Create exhibition error:', error.stack);
            res.status(500).json({ message: 'Internal server error: ' + error.message });
        }
    } catch (error) {
        console.error('DB connection error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching exhibitions
app.get('/api/exhibitions', async (req, res) => {
    const { userId } = req.query;

    try {
        const connection = await pool.getConnection();
        let query = `
            SELECT 
                e.id, 
                e.title, 
                e.description, 
                e.start_date, 
                e.end_date, 
                e.is_public, 
                e.views, 
                e.likes, 
                e.shares, 
                e.created_at,
                u.nickname as author
            FROM 
                exhibitions e
            JOIN 
                users u ON e.user_id = u.id
        `;
        const params = [];

        if (userId) {
            query += ' WHERE e.user_id = ?';
            params.push(userId);
        } else {
            query += ' WHERE e.is_public = TRUE'; // Only show public exhibitions if no specific user is requested
        }

        query += ' ORDER BY e.created_at DESC';

        const [rows] = await connection.execute(query, params);
        connection.release();
        res.status(200).json(rows);

    } catch (error) {
        console.error('Fetch exhibitions error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching favorite exhibitions for a user
app.get('/api/favorites', async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const query = `
                SELECT 
                    e.id, 
                    e.title, 
                    e.description, 
                    e.start_date, 
                    e.end_date, 
                    e.is_public, 
                    e.views, 
                    e.likes, 
                    e.shares, 
                    e.created_at,
                    u.nickname as author
                FROM 
                    exhibitions e
                JOIN 
                    user_favorites uf ON e.id = uf.exhibition_id
                JOIN
                    users u ON e.user_id = u.id
                WHERE 
                    uf.user_id = ?
                ORDER BY 
                    uf.created_at DESC
            `;
            const [rows] = await connection.execute(query, [userId]);
            connection.release();
            res.status(200).json(rows);
        } catch (error) {
            connection.release();
            console.error('Fetch favorites error:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.error('DB connection error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// ----------------------------------------------------------------------------------

// 3. 🟢 서버 시작 로직 수정 (DB 연결 테스트 포함)
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Pool 생성 시도 (Pool 생성 자체가 실패할 가능성도 있음)
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // 연결 테스트: Pool에서 커넥션을 하나 가져와서 테스트 후 바로 반납
        const connection = await pool.getConnection();
        await connection.release();
        console.log('✅ MySQL Pool 연결 성공!');

        // 서버 리스닝 시작
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });

    } catch (error) {
        // DB 연결 실패 시 에러 출력 후 서버 시작 중단
        console.error('❌ DB 연결 설정 오류 또는 서버 시작 실패:', error.stack);
        console.log('🔥 서버가 종료됩니다. .env 파일의 DB 정보를 확인하세요.');
        process.exit(1); 
    }
}

(async () => {
    await startServer();
})();