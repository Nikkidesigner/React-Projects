const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const favicon = require("serve-favicon");
const path = require("path");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin:'https://frontend-kappa-nine-74.vercel.app',// Allow the frontend domain
  methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use((req, res, next) => {
  console.log("CORS Headers:");
  console.log(req.headers);
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Test Route
app.get("/", (req, res) => {
  res.json("Hello this is the signup server running on vercel");
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // No Content
});

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
