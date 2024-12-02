const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // ID người dùng
  products: [
    { 
      productId: { type: String, required: true }, // ID sản phẩm
      quantity: { type: Number, required: true, default: 1 },
      price: { type: Number, required: true }, // Giá mỗi sản phẩm
    },
  ],
  totalPrice: { type: Number, required: true, default: 0 }, // Tổng tiền đơn hàng
  orderDate: { type: Date, default: Date.now }, // Ngày đặt hàng
  status: { type: String, required: true, default: "Pending" }, // Trạng thái đơn hàng
});

module.exports = mongoose.model("Order", OrderSchema, "Orders");
