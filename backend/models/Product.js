const mongoose = require("mongoose");
 
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [String], // Array of image URLs
  rating: {
    stars: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  attributes: {
    size: [String],
    color: [String],
  },
  subcategoryId: {
    type: String,  // Changed from ObjectId to String
    required: true,
  },
  reviews: [String], // Array of review strings
});

module.exports = mongoose.model("Product", ProductSchema, "Products");
