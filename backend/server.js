const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UMP CFERI Backend Running...");
});

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/businesses", require("./routes/businessRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));

const PORT = process.env.PORT || 5000;

// Connect to the database before starting the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});