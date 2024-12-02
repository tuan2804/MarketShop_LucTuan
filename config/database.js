const mongoose = require("mongoose");

const connectDB = async () => {
  try { 
    await mongoose.connect("mongodb://localhost:27017/mobile");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Thoát chương trình nếu kết nối thất bại
  }
};

module.exports = connectDB;
