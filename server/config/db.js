// config/db.js

const mongoose = require('mongoose');

// Replace the following URL with your actual MongoDB connection string
const dbURI = process.env.MONGODB_URL; // Update with your DB name

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
