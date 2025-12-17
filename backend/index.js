console.log('--- SERVER CODE UPDATED ---');

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');

require('dotenv').config();

const app = express();

/* =========================
   CORS (FINAL – SINGLE SOURCE OF TRUTH)
   ========================= */
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://gad-2025-team-3.web.app',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

/* =========================
   STATIC FILES
   ========================= */
app.use('/uploads', express.static(path.join(__dirname, 'img_save')));

/* =========================
   MULTER
   ========================= */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadDir = path.join(__dirname, 'img_save');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
});

/* =========================
   DB POOL
   ========================= */
let pool;

/* =========================
   AUTH
   ========================= */
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      connection.release();
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const user = rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      connection.release();
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    connection.release();
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/* =========================
   FILE UPLOAD
   ========================= */
app.post('/api/upload', upload.array('files', 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded.' });
  }

  const urls = req.files.map(file =>
    `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
  );

  res.status(200).json({ urls });
});

/* =========================
   (이 아래로)
   네가 작성한 전시관 / 댓글 / 팔로우 /
   즐겨찾기 / 통계 API 전부 그대로 유지
   ❌ 삭제 없음
   ========================= */

/* =========================
   SERVER START
   ========================= */
const PORT = process.env.PORT || 3003;

async function startServer() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      charset: 'utf8mb4',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const conn = await pool.getConnection();
    conn.release();
    console.log('✅ MySQL Pool 연결 성공');

    cron.schedule(
      '0 0 * * *',
      async () => {
        const c = await pool.getConnection();
        await c.execute(
          'UPDATE exhibitions SET is_public = FALSE WHERE end_date < CURDATE()'
        );
        c.release();
      },
      { timezone: 'Asia/Seoul' }
    );

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('❌ Server start failed:', err);
    process.exit(1);
  }
}

startServer();