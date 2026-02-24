const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginAdmin);

// Protected test route
router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

module.exports = router;