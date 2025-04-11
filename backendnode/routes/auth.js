// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const [existingUser] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
  if (existingUser.length > 0) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

  return res.status(201).json({ message: 'User registered successfully' });
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [user] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
  if (user.length === 0) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Check if password matches
  const isPasswordValid = await bcrypt.compare(password, user[0].password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create JWT token
  const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  return res.json({ token });
});

module.exports = router;
