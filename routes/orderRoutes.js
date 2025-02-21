const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Place an Order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
});

// Get All Orders
router.get('/', async (req, res) => {
    const orders = await Order.find().populate('user').populate('items.product');
    res.json(orders);
});

module.exports = router;
