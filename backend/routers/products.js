const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Lấy tất cả các sản phẩm theo subcategoryId
router.get("/:subcategoryId", async (req, res) => {
  try {
    const products = await Product.find({
      subcategoryId: req.params.subcategoryId,
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Thêm mới sản phẩm
router.post("/", async (req, res) => {
  const { name, description, price, quantity, images, rating, attributes, subcategoryId } = req.body;

  // Kiểm tra nếu tất cả các trường yêu cầu đều có
  if (!name || !price || !quantity || !subcategoryId) {
    return res.status(400).json({ msg: "Vui lòng cung cấp đầy đủ thông tin sản phẩm" });
  }

  try {
    // Tạo một đối tượng sản phẩm mới
    const newProduct = new Product({
      name,
      description,
      price,
      quantity,
      images,
      rating,
      attributes,
      subcategoryId,
    });

    // Lưu sản phẩm vào cơ sở dữ liệu
    await newProduct.save();

    // Trả về thông tin sản phẩm vừa thêm
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
