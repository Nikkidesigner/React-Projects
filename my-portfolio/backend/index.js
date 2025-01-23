const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");
const path = require("path");
require("dotenv").config();
const app = express();

// Allow CORS from your frontend origin
const corsOptions = {
  origin: 'https://portfolio-frontend-neon-iota.vercel.app',// Allow the frontend domain
  methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Middleware
// Handle preflight requests
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log("CORS Headers:");
  console.log(req.headers);
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio Backend API!");
});

//routes
app.use("/api", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
