// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const articleRoutes = require('./routes/article');

// Logging: morgan
// Security: helmet
// Rate Limiting: express-rate-limit   

const app = express();

// Middleware
app.use(cors()); // Allow all origins (for simplicity, you can restrict this)
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/articles', articleRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
