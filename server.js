const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routers/auth");
const CategoryRoutes = require("./routers/categories");
const SubcategoryRoutes = require("./routers/subcategory");
const ProductRoutes = require("./routers/products");
const OrderRoutes = require("./routers/orders"); // Import routes orders

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Kết nối MongoDB
connectDB();

// Định nghĩa routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", CategoryRoutes);
app.use("/api/subcategory", SubcategoryRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes); // Thêm routes cho orders

// Chạy server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
