// routes/article.js
const express = require('express');
const verifyToken = require('../middleware/auth');
const pool = require('../db');
const router = express.Router();

// Get all articles (example)
router.get('/', verifyToken, async (req, res) => {
  const [articles] = await pool.execute('SELECT * FROM articles');
  return res.json(articles);
});

module.exports = router;