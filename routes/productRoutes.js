const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get All Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add a New Product (Admin Only)
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

module.exports = router;
