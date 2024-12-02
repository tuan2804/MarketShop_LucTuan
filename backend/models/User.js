const mongoose = require("mongoose");
 
// Định nghĩa schema User
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  cart: [{ productId: String, quantity: Number }],
  orders: [String],
});

// Tạo model User
const User = mongoose.model("User", UserSchema, "Users");

module.exports = User;
