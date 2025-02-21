const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db'); // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

app.get("/", (req, res) => {
    res.send("🚀 Smart Ordering API is running!");
});
