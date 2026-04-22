const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: false,
}));
app.use(express.json());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.send("UMP CFERI Backend Running...");
});

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/businesses", require("./routes/businessRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/mentors", require("./routes/mentorRoutes"));

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;

// Connect to the database before starting the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});