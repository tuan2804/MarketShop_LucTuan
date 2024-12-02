// models/Subcategory.js
const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  _id: {
    type: String,  // Đảm bảo _id là một chuỗi
    required: true, // Yêu cầu có trường _id
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  categoryId: {
    type: String, // Đây là ID của category
    required: true,
  },
  products: [{
    type: String, // Đây là các ID của sản phẩm trong subcategory
  }],
  image: {
    type: String,
  },
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema, "Subcategories");

module.exports = Subcategory;
