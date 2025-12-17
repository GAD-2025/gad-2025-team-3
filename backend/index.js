console.log("--- SERVER CODE UPDATED ---");
const express = require('express'); // ⬅️ express 모듈 로드
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron'); // Add node-cron import

// 1. 🟢 필수 수정: .env 파일 경로 명시
require('dotenv').config();

// 🚨 1단계 해결: app 변수 정의 및 초기화 (이 부분이 없었거나 아래쪽에 있었습니다!)
const app = express(); 

const corsOptions= {
    origin: ['http://localhost:5173', 'https://gad-2025-team-3.web.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(express.json({ limit: '50mb' })); // ⬅️ 이제 app을 사용할 수 있습니다.
app.use(cors(corsOptions)); // Commented out for debugging CORS

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5173', 'https://gad-2025-team-3.web.app'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Required for credentials to be sent
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
}); 

// Serve static files from img_save folder
app.use('/uploads', express.static(path.join(__dirname, 'img_save')));

// Multer configuration for file uploads
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
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
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

// 2. ❌ 기존 const pool 선언 위치: 이 위치에서 선언하면 DB 연결 실패 시 서버 시작이 멈춥니다.
// const pool = mysql.createPool({...}); 


// 🟢 수정: Pool 객체를 담을 변수를 전역으로 선언
let pool;

// ----------------------------------------------------------------------------------

// API for uploading files
app.post('/api/upload', upload.array('files', 20), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded.' });
        }

        const fileUrls = req.files.map(file => {
            const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3003}`;
            return `${baseUrl}/uploads/${file.filename}`;
        });

        res.status(200).json({ urls: fileUrls });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ message: 'File upload failed: ' + error.message });
    }
});

// ----------------------------------------------------------------------------------

// 🎯 메인 API 로직: DB 연결 풀(당구)을 사용하도록 수정
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

            // Fetch the newly created user to return it in the response
            const [rows] = await connection.execute('SELECT id, username, email, nickname, bio, age14, terms, privacy, marketing, created_at FROM users WHERE id = ?', [userId]);
            const newUser = rows[0];
            const { password: _, ...userWithoutPassword } = newUser;

            connection.release();

            res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
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
                'SELECT id, username, password, email, nickname, bio, age14, terms, privacy, marketing, created_at FROM users WHERE username = ?',
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

// Endpoint to check for duplicate username
app.post('/api/check-username', async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required.' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE username = ?',
                [username]
            );

            connection.release();

            if (rows.length > 0) {
                // Username found, it's a duplicate
                res.status(200).json({ isDuplicate: true });
            } else {
                // Username not found, it's available
                res.status(200).json({ isDuplicate: false });
            }

        } catch (error) {
            connection.release();
            console.error('Check username error:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.error('DB connection error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to check for duplicate nickname
app.post('/api/check-nickname', async (req, res) => {
    const { nickname } = req.body;

    if (!nickname) {
        return res.status(400).json({ message: 'Nickname is required.' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE nickname = ?',
                [nickname]
            );

            connection.release();

            if (rows.length > 0) {
                // Nickname found, it's a duplicate
                res.status(200).json({ isDuplicate: true });
            } else {
                // Nickname not found, it's available
                res.status(200).json({ isDuplicate: false });
            }

        } catch (error) {
            connection.release();
            console.error('Check nickname error:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.error('DB connection error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for creating an exhibition
app.post('/api/exhibitions', async (req, res) => {
    const { userId, title, description, startDate, endDate, isPublic, uploadedFiles, hashtags } = req.body;

    if (!userId || !title || !startDate || !endDate) {
        return res.status(400).json({ message: 'Missing required exhibition fields.' });
    }

    // Validate startDate: must be today or in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of today
    const exhibitionStartDate = new Date(startDate);
    exhibitionStartDate.setHours(0, 0, 0, 0); // Set to start of startDate

    if (exhibitionStartDate < today) {
        return res.status(400).json({ message: 'Exhibition start date cannot be in the past.' });
    }

    try {
        const connection = await pool.getConnection();
        await connection.beginTransaction();

        try {
            // room_number와 room_creation_count 결정
            const [exhibitionCountResult] = await connection.execute(
                'SELECT COUNT(*) AS count FROM exhibitions'
            );
            const exhibitionCount = exhibitionCountResult[0].count;
            let nextRoomNumber = 200 + (exhibitionCount + 1);
            const room_number = String(nextRoomNumber).padStart(3, '0');

            // 해당 room_number의 creation_count 결정
            const [creationCountResult] = await connection.execute(
                'SELECT COUNT(*) AS count FROM exhibitions WHERE room_number = ?',
                [room_number]
            );
            const room_creation_count = creationCountResult[0].count + 1;

            const [exhibitionResult] = await connection.execute(
                'INSERT INTO exhibitions (user_id, title, description, hashtags, start_date, end_date, is_public, room_number, room_creation_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [userId, title, description, (hashtags && hashtags.length > 0) ? hashtags.join(',') : null, startDate, endDate, isPublic, room_number, room_creation_count]
            );

            const exhibitionId = exhibitionResult.insertId;

            if (uploadedFiles && uploadedFiles.length > 0) {
                const uniqueUrls = [...new Set(uploadedFiles)];
                const itemValues = uniqueUrls.map((fileUrl) => [exhibitionId, 'image', fileUrl]);
                if (itemValues.length > 0) {
                    await connection.query(
                        'INSERT INTO exhibition_items (exhibition_id, item_type, item_url) VALUES ?',
                        [itemValues]
                    );
                }
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
    const { userId, hashtag, title, sort } = req.query; // Added 'title'

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
                e.hashtags,
                e.room_number,
                u.nickname as author,
                (SELECT item_url FROM exhibition_items WHERE exhibition_id = e.id ORDER BY id LIMIT 1) as thumbnail
            FROM
                exhibitions e
            JOIN
                users u ON e.user_id = u.id
        `;
        const params = [];
        const primaryConditions = []; // Conditions for userId or is_public
        const searchConditions = [];  // Conditions for title or hashtag

        if (userId) {
            primaryConditions.push('e.user_id = ?');
            params.push(userId);
        } else {
            primaryConditions.push('e.is_public = TRUE');
        }

        if (title) {
            searchConditions.push('e.title LIKE ?');
            params.push(`%${title}%`);
        }

        if (hashtag) {
            const cleanHashtag = hashtag.startsWith('#') ? hashtag.substring(1) : hashtag;
            searchConditions.push('e.hashtags LIKE ?');
            params.push(`%#${cleanHashtag}%`);
        }

        let whereClause = '';
        if (primaryConditions.length > 0) {
            whereClause += ' WHERE ' + primaryConditions.join(' AND ');
        }

        if (searchConditions.length > 0) {
            // If primaryConditions exist, add 'AND'
            if (whereClause.length > 0) {
                whereClause += ' AND ';
            } else {
                whereClause += ' WHERE ';
            }
            // Combine search conditions with OR, wrapped in parentheses for precedence
            whereClause += `(${searchConditions.join(' OR ')})`;
        }

        query += whereClause;

        let orderBy = ' ORDER BY e.created_at DESC'; // Default sort
        if (sort === 'views') {
            orderBy = ' ORDER BY e.views DESC';
        } else if (sort === 'likes') {
            orderBy = ' ORDER BY e.likes DESC';
        }
        query += orderBy;

        const [rows] = await connection.execute(query, params);
        connection.release();
        res.status(200).json(rows);

    } catch (error) {
        console.error('Fetch exhibitions error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.get('/api/exhibitions/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await pool.getConnection();
        console.error('DEBUG: Connection obtained for /api/exhibitions/:id');

        // Increment view count
        await connection.execute(
            'UPDATE exhibitions SET views = views + 1 WHERE id = ?',
            [id]
        );
        console.error('DEBUG: View count incremented for /api/exhibitions/:id');

        const [rows] = await connection.execute(
            `
            SELECT 
                e.id, 
                e.user_id,
                e.title, 
                e.description, 
                e.hashtags, 
                e.start_date, 
                e.end_date, 
                e.is_public, 
                e.views, 
                e.likes, 
                e.shares, 
                e.created_at,
                e.room_number,
                e.hashtags,
                u.nickname as author
            FROM 
                exhibitions e
            JOIN 
                users u ON e.user_id = u.id
            WHERE 
                e.id = ?
            `,
            [id]
        );
        connection.release();
        console.error('DEBUG: Query executed and connection released for /api/exhibitions/:id');
        console.log('Fetched exhibition data:', rows[0]);

        if (rows.length === 0) {
            console.error('DEBUG: Exhibition not found for /api/exhibitions/:id');
            return res.status(404).json({ message: 'Exhibition not found.' });
        }

        res.status(200).json(rows[0]);
        console.error('DEBUG: Response sent for /api/exhibitions/:id');

    } catch (error) {
        console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.error('!!! FETCH SINGLE EXHIBITION ERROR !!!');
        console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.error('Error details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching exhibition items by exhibition ID
app.get('/api/exhibitions/:id/items', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT item_url FROM exhibition_items WHERE exhibition_id = ?',
            [id]
        );
        connection.release();
        res.status(200).json(rows.map(row => row.item_url));
    } catch (error) {
        console.error('Fetch exhibition items error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for deleting an exhibition
app.delete('/api/exhibitions/:id', async (req, res) => {
    const { id } = req.params;

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Get image file URLs before deleting the exhibition
        const [items] = await connection.execute(
            'SELECT item_url FROM exhibition_items WHERE exhibition_id = ?',
            [id]
        );

        // 2. Delete the exhibition from the database (cascades to exhibition_items, comments, etc.)
        const [deleteResult] = await connection.execute(
            'DELETE FROM exhibitions WHERE id = ?',
            [id]
        );

        if (deleteResult.affectedRows === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Exhibition not found.' });
        }

        await connection.commit();
        connection.release();

        // 3. Delete files from the filesystem
        if (items.length > 0) {
            items.forEach(item => {
                try {
                    const url = item.item_url;
                    const filename = path.basename(url); // Extracts filename from URL
                    const filePath = path.join(__dirname, 'img_save', filename);

                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                        console.log(`Deleted file: ${filePath}`);
                    }
                } catch (fileError) {
                    // Log error but don't stop the process, as the DB entry is already gone.
                    console.error(`Error deleting file: ${item.item_url}`, fileError);
                }
            });
        }

        res.status(200).json({ message: 'Exhibition deleted successfully.' });

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Delete exhibition error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for updating an exhibition
app.put('/api/exhibitions/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, start_date, end_date, is_public, hashtags, username } = req.body;

    if (!id || !title || !start_date || !end_date || username === undefined) {
        return res.status(400).json({ message: 'Missing required exhibition fields or authorization info.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Verify exhibition exists and get its owner's user_id
        const [exhibitionRows] = await connection.execute(
            'SELECT user_id FROM exhibitions WHERE id = ?',
            [id]
        );

        if (exhibitionRows.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Exhibition not found.' });
        }
        const exhibitionOwnerUserId = exhibitionRows[0].user_id;

        // 2. Get the user_id of the requesting user based on username
        const [userRows] = await connection.execute(
            'SELECT id FROM users WHERE username = ?',
            [username]
        );

        if (userRows.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(401).json({ message: 'Unauthorized: User not found.' });
        }
        const requestingUserId = userRows[0].id;

        // 3. Authorize: check if the requesting user is the owner of the exhibition
        if (requestingUserId !== exhibitionOwnerUserId) {
            await connection.rollback();
            connection.release();
            return res.status(403).json({ message: 'Forbidden: You are not authorized to update this exhibition.' });
        }

        // 4. Update the exhibition
        const [updateResult] = await connection.execute(
            'UPDATE exhibitions SET title = ?, description = ?, start_date = ?, end_date = ?, is_public = ?, hashtags = ? WHERE id = ?',
            [title, description, start_date, end_date, is_public, hashtags, id]
        );

        if (updateResult.affectedRows === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Exhibition not found or no changes made.' });
        }

        await connection.commit();
        connection.release();
        res.status(200).json({ message: 'Exhibition updated successfully.' });

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Update exhibition error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching comments for an exhibition
app.get('/api/exhibitions/:id/comments', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT c.id, c.user_id, u.nickname as author, c.content, c.created_at FROM comments c JOIN users u ON c.user_id = u.id WHERE c.exhibition_id = ? ORDER BY c.created_at DESC',
            [id]
        );
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.error('!!! FETCH COMMENTS ERROR !!!');
        console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for posting a new comment to an exhibition
app.post('/api/exhibitions/:id/comments', async (req, res) => {
    const { id } = req.params;
    const { userId, content } = req.body;

    if (!userId || !content) {
        return res.status(400).json({ message: 'User ID and content are required for a comment.' });
    }

    try {
        const connection = await pool.getConnection();
        // Fetch the nickname of the user
        const [userRows] = await connection.execute(
            'SELECT nickname FROM users WHERE id = ?',
            [userId]
        );

        if (userRows.length === 0) {
            connection.release();
            return res.status(404).json({ message: 'User not found.' });
        }
        const authorNickname = userRows[0].nickname;

        const [result] = await connection.execute(
            'INSERT INTO comments (exhibition_id, user_id, content) VALUES (?, ?, ?)', // author 제거
            [id, userId, content]
        );

        const newCommentId = result.insertId;
        // Fetch the new comment along with the user's current nickname
        const [newCommentRows] = await connection.execute(
            'SELECT c.id, c.user_id, u.nickname as author, c.content, c.created_at FROM comments c JOIN users u ON c.user_id = u.id WHERE c.id = ?',
            [newCommentId]
        );
        connection.release();

        res.status(201).json(newCommentRows[0]);
    } catch (error) {
        console.error('Post comment error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for deleting a comment
app.delete('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { userId } = req.body; // Expect userId for authorization

    if (!userId) {
        return res.status(401).json({ message: 'Authorization information (userId) is required.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Get the comment's user_id
        const [comments] = await connection.execute(
            'SELECT user_id FROM comments WHERE id = ?',
            [commentId]
        );

        if (comments.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Comment not found.' });
        }
        const commentOwnerUserId = comments[0].user_id;

        // 2. Authorize: check if the requesting user's ID matches the comment's owner user_id
        if (commentOwnerUserId !== userId) {
            await connection.rollback();
            connection.release();
            return res.status(403).json({ message: 'You are not authorized to delete this comment.' });
        }

        // 3. Delete the comment
        const [deleteResult] = await connection.execute(
            'DELETE FROM comments WHERE id = ?',
            [commentId]
        );

        if (deleteResult.affectedRows === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Comment not found after authorization check.' });
        }

        await connection.commit();
        connection.release();
        res.status(200).json({ message: 'Comment deleted successfully.' });

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Delete comment error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for deleting a user account
app.delete('/api/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const { username } = req.body; // Assuming username is passed for authorization

    if (!username) {
        return res.status(401).json({ message: 'Authorization information (username) is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Get the user to verify authorization
        const [users] = await connection.execute(
            'SELECT id, username FROM users WHERE id = ?',
            [parsedUserId]
        );

        if (users.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'User not found.' });
        }

        const targetUser = users[0];

        // 2. Authorize: check if the requesting user is the target user
        if (targetUser.username !== username) {
            await connection.rollback();
            connection.release();
            return res.status(403).json({ message: 'You are not authorized to delete this account.' });
        }

        // 3. Delete related data from user_artists first
        await connection.execute(
            'DELETE FROM user_artists WHERE user_id = ?',
            [parsedUserId]
        );

        // 4. Delete the user
        const [deleteResult] = await connection.execute(
            'DELETE FROM users WHERE id = ?',
            [parsedUserId]
        );
        if (deleteResult.affectedRows === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'User not found after authorization check.' });
        }

        await connection.commit();
        connection.release();
        res.status(200).json({ message: 'User account deleted successfully.' });

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Delete user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// API for fetching a single user's profile
app.get('/api/users/:userId', async (req, res) => {
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

        // Fetch user details
        const [userRows] = await connection.execute(
            'SELECT id, username, email, nickname, bio, created_at FROM users WHERE id = ?',
            [parsedUserId]
        );

        if (userRows.length === 0) {
            connection.release();
            return res.status(404).json({ message: 'User not found.' });
        }

        const user = userRows[0];

        // Fetch user artists
        const [artistRows] = await connection.execute(
            'SELECT artist_id FROM user_artists WHERE user_id = ?',
            [parsedUserId]
        );
        const user_artists = artistRows.map(row => row.artist_id); // artist_id를 아티스트 이름으로 사용

        // Fetch exhibition count
        const [exhibitionCountRows] = await connection.execute(
            'SELECT COUNT(*) AS exhibition_count FROM exhibitions WHERE user_id = ?',
            [parsedUserId]
        );
        const exhibition_count = exhibitionCountRows[0].exhibition_count;

        // Fetch follower count
        const [followerCountRows] = await connection.execute(
            'SELECT COUNT(*) AS follower_count FROM user_follows WHERE followed_id = ?',
            [parsedUserId]
        );
        const follower_count = followerCountRows[0].follower_count;

        // Fetch following count
        const [followingCountRows] = await connection.execute(
            'SELECT COUNT(*) AS following_count FROM user_follows WHERE follower_id = ?',
            [parsedUserId]
        );
        const following_count = followingCountRows[0].following_count;

        connection.release();

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            nickname: user.nickname,
            bio: user.bio,
            created_at: user.created_at,
            exhibition_count,
            follower_count,
            following_count,
            user_artists, // Add user_artists to the response
            total_views: 0, // Assuming these are not yet tracked per user
            total_likes: 0, // Assuming these are not yet tracked per user
            total_shares: 0, // Assuming these are not yet tracked per user
        });

    } catch (error) {
        console.error('Fetch single user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for fetching a user's exhibitions
app.get('/api/users/:userId/exhibitions', async (req, res) => {
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
                e.hashtags,
                u.nickname as author,
                (SELECT item_url FROM exhibition_items WHERE exhibition_id = e.id ORDER BY id LIMIT 1) as thumbnail
            FROM
                exhibitions e
            JOIN
                users u ON e.user_id = u.id
            WHERE
                e.user_id = ?
            ORDER BY e.created_at DESC
            `,
            [parsedUserId]
        );
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.error('Fetch user exhibitions error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for updating a user's profile
app.put('/api/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const { nickname, bio, username, user_artists } = req.body;

    if (!nickname || !username) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Verify user exists and get their current details
        const [users] = await connection.execute(
            'SELECT * FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'User not found.' });
        }

        const userToUpdate = users[0];

        // 2. Authorize: check if the requesting user is the one being updated
        if (userToUpdate.username !== username) {
            await connection.rollback();
            connection.release();
            return res.status(403).json({ message: 'Forbidden: You are not authorized to update this profile.' });
        }

        // 3. If nickname is being changed, check for duplicates
        if (nickname !== userToUpdate.nickname) {
            const [duplicateRows] = await connection.execute(
                'SELECT id FROM users WHERE nickname = ? AND id != ?',
                [nickname, userId]
            );
            if (duplicateRows.length > 0) {
                await connection.rollback();
                connection.release();
                return res.status(409).json({ message: 'Nickname already in use.' });
            }
        }

        // 4. Update the user's profile (nickname and bio)
        const [updateResult] = await connection.execute(
            'UPDATE users SET nickname = ?, bio = ? WHERE id = ?',
            [nickname, bio, userId]
        );

        // 5. Update user_artists
        // Delete existing user_artists first
        await connection.execute(
            'DELETE FROM user_artists WHERE user_id = ?',
            [userId]
        );

        // Insert new user_artists if provided
        if (user_artists && user_artists.length > 0) {
            const artistValues = user_artists.map(artistId => [userId, artistId]);
            await connection.query(
                'INSERT INTO user_artists (user_id, artist_id) VALUES ?',
                [artistValues]
            );
        }

        if (updateResult.affectedRows === 0 && (!user_artists || user_artists.length === 0)) {
            // If no user fields were updated and no artists were added/removed
            await connection.rollback();
            connection.release();
            return res.status(200).json({ message: 'No changes made.' }); // Or 404/304 depending on desired behavior
        }

        // 6. Fetch the updated user data to return
        const [updatedUserRows] = await connection.execute(
            'SELECT id, username, email, nickname, bio, created_at FROM users WHERE id = ?', // Select specific fields
            [userId]
        );
        const updatedUser = updatedUserRows[0];

        // Fetch updated user_artists
        const [updatedArtistRows] = await connection.execute(
            'SELECT artist_id FROM user_artists WHERE user_id = ?',
            [userId]
        );
        updatedUser.user_artists = updatedArtistRows.map(row => row.artist_id); // Add updated artists

        await connection.commit();
        connection.release();

        const { password: _, ...updatedUserWithoutPassword } = updatedUser;
        res.status(200).json(updatedUserWithoutPassword);

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Update user profile error:', error.message);
        console.error('Error stack:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for liking/unliking an exhibition
app.post('/api/exhibitions/:id/like', async (req, res) => {
    const { id: exhibitionId } = req.params;
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Check if the user has already liked the exhibition in exhibition_likes
        const [likeRows] = await connection.execute(
            'SELECT * FROM exhibition_likes WHERE user_id = ? AND exhibition_id = ?',
            [userId, exhibitionId]
        );

        if (likeRows.length > 0) {
            // User has already liked, so unlike it
            await connection.execute(
                'DELETE FROM exhibition_likes WHERE user_id = ? AND exhibition_id = ?',
                [userId, exhibitionId]
            );

            await connection.execute(
                'UPDATE exhibitions SET likes = likes - 1 WHERE id = ?',
                [exhibitionId]
            );

            await connection.commit();
            connection.release();
            res.status(200).json({ message: 'Exhibition unliked successfully.' });

        } else {
            // User has not liked yet, so like it
            await connection.execute(
                'INSERT INTO exhibition_likes (user_id, exhibition_id) VALUES (?, ?)',
                [userId, exhibitionId]
            );

            await connection.execute(
                'UPDATE exhibitions SET likes = likes + 1 WHERE id = ?',
                [exhibitionId]
            );

            await connection.commit();
            connection.release();
            res.status(200).json({ message: 'Exhibition liked successfully.' });
        }

    } catch (error) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        console.error('Like/unlike exhibition error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for incrementing share count
app.post('/api/exhibitions/:id/share', async (req, res) => {
    const { id: exhibitionId } = req.params;

    try {
        const connection = await pool.getConnection();
        await connection.execute(
            'UPDATE exhibitions SET shares = shares + 1 WHERE id = ?',
            [exhibitionId]
        );
        connection.release();
        res.status(200).json({ message: 'Share count incremented successfully.' });
    } catch (error) {
        console.error('Increment share count error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// API for checking if a user liked an exhibition
app.get('/api/exhibitions/:id/is-liked', async (req, res) => {
    const { id: exhibitionId } = req.params;
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
        return res.status(400).json({ message: 'Invalid User ID format. Must be a number.' });
    }

    const parsedExhibitionId = parseInt(exhibitionId, 10);
    if (isNaN(parsedExhibitionId)) {
        return res.status(400).json({ message: 'Invalid Exhibition ID format. Must be a number.' });
    }

    try {
        const connection = await pool.getConnection();
        console.log(`DEBUG: Checking like status for userId: ${parsedUserId}, exhibitionId: ${parsedExhibitionId}`);
        const [rows] = await connection.execute(
            'SELECT * FROM exhibition_likes WHERE user_id = ? AND exhibition_id = ?',
            [parsedUserId, parsedExhibitionId]
        );
        connection.release();
        const isLikedStatus = rows.length > 0;
        console.log(`DEBUG: isLiked: ${isLikedStatus}`);
        res.status(200).json({ isLiked: isLikedStatus });

    } catch (error) {
        console.error('Check is-liked error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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
const PORT = process.env.PORT || 3003;

async function startServer() {
    try {
        // Pool 생성 시도 (Pool 생성 자체가 실패할 가능성도 있음)
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
            timezone: 'Z',

            charset: 'utf8mb4',

            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // 연결 테스트: Pool에서 커넥션을 하나 가져와서 테스트 후 바로 반납
        const connection = await pool.getConnection();
        await connection.release();
        console.log('✅ MySQL Pool 연결 성공!');

        // Schedule a task to run every day at midnight
        cron.schedule('0 0 * * * ', async () => { // Runs at 00:00 every day
            console.log('Running daily exhibition privacy check...');
            let connection;
            try {
                connection = await pool.getConnection();
                const [result] = await connection.execute(
                    'UPDATE exhibitions SET is_public = FALSE WHERE end_date < CURDATE() AND is_public = TRUE'
                );
                console.log(`Updated ${result.affectedRows} exhibitions to private.`);
            } catch (error) {
                console.error('Error in daily exhibition privacy check:', error);
            } finally {
                if (connection) connection.release();
            }
        }, {
            scheduled: true,
            timezone: "Asia/Seoul" // Set your desired timezone
        });

        // 서버 리스닝 시작
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
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