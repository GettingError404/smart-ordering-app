const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ product: mongoose.Schema.Types.ObjectId, quantity: Number }],
    total_price: Number,
    status: { type: String, enum: ['pending', 'ready', 'completed', 'cancelled'], default: 'pending' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
