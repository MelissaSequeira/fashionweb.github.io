const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
