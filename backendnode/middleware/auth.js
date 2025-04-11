// middleware/auth.js
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const pool = require('../db');

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    // Check if the user exists in the database
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);
    
    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Token is valid; pass user to the next middleware or route
    req.user = decoded;

    // Regenerate token if expired and still valid
    if (decoded.exp * 1000 < Date.now()) {
      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
      });
      res.header('Authorization', 'Bearer ' + newToken);
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = verifyToken;
