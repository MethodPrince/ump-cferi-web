const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: false,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UMP CFERI Backend Running...");
});

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/businesses", require("./routes/businessRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/mentors", require("./routes/mentorRoutes"));
const PORT = process.env.PORT || 5000;

// Connect to the database before starting the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});