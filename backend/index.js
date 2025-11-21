const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// 1. 🟢 필수 수정: .env 파일 경로 명시
require('dotenv').config(); 

const app = express();
app.use(cors());
app.use(express.json());

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

        // 🟢 pool을 전역 변수로 사용하여 연결 가져오기
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
                // 여기서 artistId가 배열이 아님을 가정하고 수정
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
            console.error('Signup error:', error);
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: 'Username, email, or nickname already exists.' });
            }
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// ----------------------------------------------------------------------------------

// 3. 🟢 서버 시작 로직 수정 (DB 연결 테스트 포함)
const PORT = process.env.PORT || 3001;

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
        console.error('❌ DB 연결 설정 오류 또는 서버 시작 실패:', error.message);
        console.log('🔥 서버가 종료됩니다. .env 파일의 DB 정보를 확인하세요.');
        process.exit(1); 
    }
}

startServer();