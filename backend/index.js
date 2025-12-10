console.log("--- SERVER CODE UPDATED ---");
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron'); // Add node-cron import

// 1. 🟢 필수 수정: .env 파일 경로 명시
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

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
            return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
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
            const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [userId]);
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
                e.room_number,
                e.room_creation_count,
                e.hashtags,
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
                e.room_creation_count,
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
    const { title, description, start_date, end_date, is_public, username } = req.body;

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
            'UPDATE exhibitions SET title = ?, description = ?, start_date = ?, end_date = ?, is_public = ? WHERE id = ?',
            [title, description, start_date, end_date, is_public, id]
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
            'SELECT id, author, content, created_at FROM comments WHERE exhibition_id = ? ORDER BY created_at DESC',
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
    const { author, content } = req.body;

    if (!author || !content) {
        return res.status(400).json({ message: 'Author and content are required for a comment.' });
    }

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'INSERT INTO comments (exhibition_id, author, content) VALUES (?, ?, ?)',
            [id, author, content]
        );

        const newCommentId = result.insertId;
        const [newCommentRows] = await connection.execute(
            'SELECT id, author, content, created_at FROM comments WHERE id = ?',
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
    const { username } = req.body; // Assuming username is passed for authorization

    if (!username) {
        return res.status(401).json({ message: 'Authorization information (username) is required.' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Get the comment to verify author
        const [comments] = await connection.execute(
            'SELECT author FROM comments WHERE id = ?',
            [commentId]
        );

        if (comments.length === 0) {
            await connection.rollback();
            connection.release();
            return res.status(404).json({ message: 'Comment not found.' });
        }

        const commentAuthor = comments[0].author;

        // 2. Authorize: check if the requesting user is the author of the comment
        if (commentAuthor !== username) {
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
        const [rows] = await connection.execute(
            'SELECT * FROM exhibition_likes WHERE user_id = ? AND exhibition_id = ?',
            [parsedUserId, parsedExhibitionId]
        );
        connection.release();

        res.status(200).json({ isLiked: rows.length > 0 });

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
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Pool 생성 시도 (Pool 생성 자체가 실패할 가능성도 있음)
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
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