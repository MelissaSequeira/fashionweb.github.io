const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productstore', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
