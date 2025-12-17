console.log("--- SERVER CODE RESTORED (FULL FEATURE) ---");
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'img_save')));

// 파일 저장소 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'img_save');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: function (req, file, cb) {
        const allowedTypes = /jpeg|jpg|png|gif|webp|mp4|webm|mov/;
        const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (ext && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only image and video files are allowed!'));
    }
});

let pool;

// 1. 파일 업로드 API
app.post('/api/upload', upload.array('files', 20), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded.' });
        }
        const fileUrls = req.files.map(file => {
            return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
        });
        res.status(200).json({ urls: fileUrls });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ message: 'File upload failed: ' + error.message });
    }
});

// 2. 아이디 중복 검사 API
app.post('/api/check-username', async (req, res) => {
    const { username } = req.body;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT id FROM users WHERE username = ?', [username]);
        connection.release();
        res.json({ isDuplicate: rows.length > 0 });
    } catch (error) {
        console.error('Check username error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 3. 닉네임 중복 검사 API
app.post('/api/check-nickname', async (req, res) => {
    const { nickname } = req.body;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT id FROM users WHERE nickname = ?', [nickname]);
        connection.release();
        res.json({ isDuplicate: rows.length > 0 });
    } catch (error) {
        console.error('Check nickname error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 4. 회원가입 API
app.post('/api/signup', async (req, res) => {
    const { username, password, email, nickname, bio, age14, terms, privacy, marketing, selectedArtists } = req.body;

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
            
            res.status(201).json({ 
                message: 'User created successfully',
                user: { id: userId, username, email, nickname, bio }
            });

        } catch (error) {
            await connection.rollback();
            connection.release();
            console.error('Signup error:', error);
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: '이미 존재하는 정보입니다.' });
            }
            res.status(500).json({ message: 'Signup failed' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 5. 로그인 API
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
        connection.release();

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 6. 전시관 생성 API (해시태그 지원)
app.post('/api/exhibitions', async (req, res) => {
    const { userId, title, description, startDate, endDate, isPublic, uploadedFiles, hashtags } = req.body;

    try {
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        try {
            // 해시태그 배열을 문자열로 변환 (DB 저장용)
            const hashtagsString = hashtags ? JSON.stringify(hashtags) : null;

            const [exhibitionResult] = await connection.execute(
                'INSERT INTO exhibitions (user_id, title, description, start_date, end_date, is_public, hashtags) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [userId, title, description, startDate, endDate, isPublic, hashtagsString]
            );

            const exhibitionId = exhibitionResult.insertId;

            if (uploadedFiles && uploadedFiles.length > 0) {
                const itemValues = uploadedFiles.map((fileUrl) => [exhibitionId, 'image', fileUrl]);
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
            console.error('Create exhibition error:', error);
            res.status(500).json({ message: 'Failed to create exhibition' });
        }
    } catch (error) {
        console.error('DB error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 7. 전시관 목록 조회 API
app.get('/api/exhibitions', async (req, res) => {
    const { userId } = req.query;

    try {
        const connection = await pool.getConnection();
        let query = `
            SELECT 
                e.id, e.title, e.description, e.start_date, e.end_date, 
                e.is_public, e.views, e.likes, e.shares, e.hashtags, e.created_at,
                u.nickname as author
            FROM exhibitions e
            JOIN users u ON e.user_id = u.id 
        `;
        const params = [];

        if (userId) {
            query += ' WHERE e.user_id = ?';
            params.push(userId);
        } else {
            query += ' WHERE e.is_public = TRUE';
        }

        query += ' ORDER BY e.created_at DESC';

        const [rows] = await connection.execute(query, params);
        connection.release();
        res.status(200).json(rows);

    } catch (error) {
        console.error('Fetch exhibitions error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// 8. 전시관 상세 조회 API
app.get('/api/exhibitions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await pool.getConnection();
        // hashtags 컬럼도 같이 가져오도록 수정됨
        const [rows] = await connection.execute(
            `SELECT e.*, u.nickname as author 
             FROM exhibitions e JOIN users u ON e.user_id = u.id 
             WHERE e.id = ?`, [id]
        );
        connection.release();
        if (rows.length === 0) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

// 9. 전시관 아이템 조회 API
app.get('/api/exhibitions/:id/items', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT item_url FROM exhibition_items WHERE exhibition_id = ?', [id]);
        connection.release();
        res.status(200).json(rows.map(r => r.item_url));
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

// 10. 댓글 조회 API
app.get('/api/exhibitions/:id/comments', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM comments WHERE exhibition_id = ? ORDER BY created_at DESC', [id]);
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

// 11. 댓글 작성 API
app.post('/api/exhibitions/:id/comments', async (req, res) => {
    const { id } = req.params;
    const { author, content } = req.body;
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute('INSERT INTO comments (exhibition_id, author, content) VALUES (?, ?, ?)', [id, author, content]);
        connection.release();
        const [rows] = await connection.execute('SELECT * FROM comments WHERE id = ?', [result.insertId]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

// 12. 좋아요 확인 API
app.get('/api/exhibitions/:id/is-liked', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.query;
    if (!userId) return res.json({ liked: false });
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM exhibition_likes WHERE user_id = ? AND exhibition_id = ?', [userId, id]);
        connection.release();
        res.json({ liked: rows.length > 0 });
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
});

// 서버 시작
// API for adding an exhibition to favorites
app.post('/api/favorites', async (req, res) => {
    const { userId, exhibitionId } = req.body;

    if (!userId || !exhibitionId) {
        return res.status(400).json({ message: 'User ID and Exhibition ID are required.' });
    }

    try {
        const connection = await pool.getConnection();
        await connection.execute(
            'INSERT INTO user_favorites (user_id, exhibition_id) VALUES (?, ?)',
            [userId, exhibitionId]
        );
        connection.release();
        res.status(201).json({ message: 'Exhibition added to favorites successfully.' });
    } catch (error) {
        console.error('Add to favorites error:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Exhibition already in favorites.' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for removing an exhibition from favorites
app.delete('/api/favorites', async (req, res) => {
    const { userId, exhibitionId } = req.body;

    if (!userId || !exhibitionId) {
        return res.status(400).json({ message: 'User ID and Exhibition ID are required.' });
    }

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'DELETE FROM user_favorites WHERE user_id = ? AND exhibition_id = ?',
            [userId, exhibitionId]
        );
        connection.release();

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Favorite not found.' });
        }
        res.status(200).json({ message: 'Exhibition removed from favorites successfully.' });
    } catch (error) {
        console.error('Remove from favorites error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for checking if a user has favorited an exhibition
app.get('/api/favorites/check', async (req, res) => {
    const { userId, exhibitionId } = req.query;

    if (!userId || !exhibitionId) {
        return res.status(400).json({ message: 'User ID and Exhibition ID are required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    const parsedExhibitionId = parseInt(exhibitionId, 10);

    if (isNaN(parsedUserId) || isNaN(parsedExhibitionId)) {
        return res.status(400).json({ message: 'Invalid User ID or Exhibition ID format. Must be numbers.' });
    }

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT * FROM user_favorites WHERE user_id = ? AND exhibition_id = ?',
            [parsedUserId, parsedExhibitionId]
        );
        connection.release();

        res.status(200).json({ isFavorited: rows.length > 0 });

    } catch (error) {
        console.error('Check is-favorited error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching a user's favorite exhibitions
app.get('/api/users/:userId/favorites', async (req, res) => {
    console.log('>>> Received request for /api/users/:userId/favorites');
    const { userId } = req.params;

    if (!userId) {
        console.log('User ID is missing.');
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        console.log('Invalid User ID format.');
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    try {
        console.log('Attempting to get DB connection...');
        const connection = await pool.getConnection();
        console.log('DB connection obtained.');
        const [rows] = await connection.execute(
            `
            SELECT 
                e.id,
                e.title,
                e.views,
                e.likes,
                e.room_number,
                e.id as roomId,
                u.nickname as authorName
            FROM 
                exhibitions e
            JOIN 
                user_favorites f ON e.id = f.exhibition_id
            JOIN 
                users u ON e.user_id = u.id
            WHERE 
                f.user_id = ?
            `,
            [parsedUserId]
        );
        connection.release();
        console.log('Fetched favorites successfully.');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Fetch favorites error:', error);
        if (error.code) {
            console.error('MySQL Error Code:', error.code);
        }
        if (error.sqlMessage) {
            console.error('MySQL Error Message:', error.sqlMessage);
        }
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching a user's followers
app.get('/api/users/:userId/followers', async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    try {
        const connection = await pool.getConnection();

        const [followerRows] = await connection.execute(
            `
            SELECT 
                u.id,
                u.nickname,
                u.bio
            FROM 
                users u
            JOIN 
                user_follows uf ON u.id = uf.follower_id
            WHERE 
                uf.followed_id = ?
            `,
            [parsedUserId]
        );
        connection.release();
        res.status(200).json(followerRows);
    } catch (error) {
        console.error('Fetch followers error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching a user's following
app.get('/api/users/:userId/following', async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    try {
        const connection = await pool.getConnection();

        const [followingRows] = await connection.execute(
            `
            SELECT 
                u.id,
                u.nickname,
                u.bio
            FROM 
                users u
            JOIN 
                user_follows uf ON u.id = uf.followed_id
            WHERE 
                uf.follower_id = ?
            `,
            [parsedUserId]
        );
        connection.release();
        res.status(200).json(followingRows);
    } catch (error) {
        console.error('Fetch following error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching a user's following
app.get('/api/users/:userId/following', async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    try {
        const connection = await pool.getConnection();

        const [followingRows] = await connection.execute(
            `
            SELECT 
                u.id,
                u.nickname,
                u.bio
            FROM 
                users u
            JOIN 
                user_follows uf ON u.id = uf.followed_id
            WHERE 
                uf.follower_id = ?
            `,
            [parsedUserId]
        );
        connection.release();
        res.status(200).json(followingRows);
    } catch (error) {
        console.error('Fetch following error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API to resolve exhibition ID by room number and optional creation count
app.get('/api/exhibitions/by-room/:roomNumber/:generationCount?', async (req, res) => {
    const { roomNumber, generationCount } = req.params;

    if (!roomNumber) {
        return res.status(400).json({ message: 'Room number is required.' });
    }

    try {
        const connection = await pool.getConnection();
        let query;
        let params;

        if (generationCount) {
            query = `
                SELECT id FROM exhibitions
                WHERE room_number = ? AND room_creation_count = ?
                LIMIT 1
            `;
            params = [roomNumber, parseInt(generationCount, 10)];
        } else {
            // If generationCount is not provided, get the latest one
            query = `
                SELECT id FROM exhibitions
                WHERE room_number = ?
                ORDER BY room_creation_count DESC, created_at DESC
                LIMIT 1
            `;
            params = [roomNumber];
        }

        const [rows] = await connection.execute(query, params);
        connection.release();

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Exhibition not found for this room.' });
        }

        res.status(200).json({ exhibitionId: rows[0].id });

    } catch (error) {
        console.error('Resolve by room error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// API for following a user
app.post('/api/users/:followedId/follow', async (req, res) => {
    const { followedId } = req.params;
    const { followerId } = req.body; // The user who is following

    if (!followerId || !followedId) {
        return res.status(400).json({ message: 'Follower ID and Followed ID are required.' });
    }

    if (parseInt(followerId) === parseInt(followedId)) {
        return res.status(400).json({ message: 'Cannot follow yourself.' });
    }

    try {
        const connection = await pool.getConnection();
        await connection.execute(
            'INSERT INTO user_follows (follower_id, followed_id) VALUES (?, ?)',
            [followerId, followedId]
        );
        connection.release();
        res.status(201).json({ message: 'User followed successfully.' });
    } catch (error) {
        console.error('Follow user error:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Already following this user.' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for unfollowing a user
app.delete('/api/users/:followedId/follow', async (req, res) => {
    const { followedId } = req.params;
    const { followerId } = req.body; // The user who is unfollowing

    if (!followerId || !followedId) {
        return res.status(400).json({ message: 'Follower ID and Followed ID are required.' });
    }

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'DELETE FROM user_follows WHERE follower_id = ? AND followed_id = ?',
            [followerId, followedId]
        );
        connection.release();

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Follow relationship not found.' });
        }
        res.status(200).json({ message: 'User unfollowed successfully.' });
    } catch (error) {
        console.error('Unfollow user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for checking if a user is following another
app.get('/api/users/:userId/is-following/:targetUserId', async (req, res) => {
    const { userId, targetUserId } = req.params;

    if (!userId || !targetUserId) {
        return res.status(400).json({ message: 'User ID and Target User ID are required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    const parsedTargetUserId = parseInt(targetUserId, 10);

    if (isNaN(parsedUserId) || isNaN(parsedTargetUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format.' });
    }

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT * FROM user_follows WHERE follower_id = ? AND followed_id = ?',
            [parsedUserId, parsedTargetUserId]
        );
        connection.release();
        res.status(200).json({ isFollowing: rows.length > 0 });
    } catch (error) {
        console.error('Check is-following error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching aggregated user statistics
app.get('/api/users/:userId/statistics', async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            `
            SELECT
                COUNT(e.id) AS exhibition_count,
                SUM(e.views) AS total_views,
                SUM(e.likes) AS total_likes,
                SUM(e.shares) AS total_shares
            FROM
                exhibitions e
            WHERE
                e.user_id = ?
            `,
            [parsedUserId]
        );
        connection.release();

        // If no exhibitions found, SUM returns null, COUNT returns 0
        const stats = rows[0];
        res.status(200).json({
            exhibition_count: stats.exhibition_count || 0,
            total_views: stats.total_views || 0,
            total_likes: stats.total_likes || 0,
            total_shares: stats.total_shares || 0,
        });

    } catch (error) {
        console.error('Fetch user statistics error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// ----------------------------------------------------------------------------------

// 3. 🟢 서버 시작 로직 수정 (DB 연결 테스트 포함)
>>>>>>> 22926c9b88c21a5ba4389d173f89bc4be4293abe
const PORT = process.env.PORT || 3003;
async function startServer() {
    try {
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT, 
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        const connection = await pool.getConnection();
        connection.release();
        console.log('✅ MySQL Connected');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    } catch (error) {
        console.error('❌ Server start failed:', error);
    }
}
startServer();
