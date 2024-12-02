const express = require("express");
const Category = require("../models/Category"); // Import mô hình Category
const router = express.Router();

// Lấy tất cả subcategories với name và image
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({}, { name: 1, image: 1 }); // Chỉ lấy name và image
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});


module.exports = router;
