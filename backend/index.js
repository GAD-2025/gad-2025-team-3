
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/signup', async (req, res) => {
  const {
    age14,
    terms,
    privacy,
    marketing,
    username,
    password,
    email,
    nickname,
    bio,
    selectedArtists
  } = req.body;

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
