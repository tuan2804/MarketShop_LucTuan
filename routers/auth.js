const express = require("express");
const User = require("../models/User"); // Import model User
const router = express.Router();

// Endpoint xác thực
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    if (user.password === password) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
    console.error(err);
  }
});

module.exports = router;
