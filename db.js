require('dotenv').config();
const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;  // Get MongoDB URI from .env file

mongoose.connect(dbURI)
    .then(() => console.log("✅ MongoDB Connected!"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

module.exports = mongoose;
