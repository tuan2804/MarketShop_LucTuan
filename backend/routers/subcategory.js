const express = require('express');
const Subcategory = require('../models/Subcategory'); // Mô hình Subcategory
const router = express.Router();
 
// Lấy danh sách subcategories theo categoryId
router.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params; // Lấy categoryId từ URL
  try {
    // Truy vấn tìm các subcategories có categoryId khớp
    const subcategories = await Subcategory.find({ categoryId }); 
    if (subcategories.length === 0) {
      return res.status(404).json({ message: `No subcategories found for categoryId: ${categoryId}` });
    }
    res.json(subcategories); // Trả về dữ liệu subcategories
  } catch (err) {
    console.error('Error fetching subcategories:', err); // Log lỗi nếu có
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
