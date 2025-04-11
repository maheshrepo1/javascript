// routes/product.js
const express = require('express');
const verifyToken = require('../middleware/auth');
const pool = require('../db');
const router = express.Router();

// Get all products (example)
router.get('/', verifyToken, async (req, res) => {
  const [products] = await pool.execute('SELECT * FROM products');
  return res.json(products);
});

module.exports = router;

