const express = require("express");
const { loginAdmin, getAdminProfile } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginAdmin);

// Get current admin
router.get('/me', protect, getAdminProfile);

// Protected test route
router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

module.exports = router;