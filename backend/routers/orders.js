const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Thêm sản phẩm vào giỏ hàng 
router.post("/", async (req, res) => {
  const { userId, productId, quantity, price } = req.body;

  try {
    let order = await Order.findOne({ userId, status: "Pending" });

    if (!order) {
      // Nếu giỏ hàng chưa tồn tại, tạo mới
      order = new Order({
        userId,
        products: [],
        totalPrice: 0,
      });
    }

    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const productIndex = order.products.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex > -1) {
      // Sản phẩm đã tồn tại, tăng số lượng
      order.products[productIndex].quantity += quantity;
    } else {
      // Sản phẩm chưa tồn tại, thêm vào giỏ hàng
      order.products.push({ productId, quantity, price });
    }

    // Cập nhật tổng tiền
    order.totalPrice += quantity * price;

    // Lưu đơn hàng
    await order.save();

    res.status(200).json({ message: "Product added to cart", order });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Lấy giỏ hàng của người dùng
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const order = await Order.findOne({ userId, status: "Pending" });

    if (!order) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
