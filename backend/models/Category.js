const mongoose = require("mongoose");
 
const CategorySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  subcategories: [{ type: String }],
  image: { type: String, required: true }
});

const Category = mongoose.model("Category", CategorySchema, "Categories");

module.exports = Category;
