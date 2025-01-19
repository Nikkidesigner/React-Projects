const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Secret key for JWT
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Replace with a secure key

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization header:", authHeader);
  if (!authHeader) {
    return res.status(403).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "Access denied. Token is missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ error: "Invalid or expired token." });
  }
};

// Route: Register User
router.post("/signup", async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    // Check if the email or phone already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or phone number already exists" });
    }

    
    const user = new User({ username, email, phone, password });

    await user.save(); // Save the user to the database

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route: Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d", // Token valid for 1 day
      }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error : ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/verify-token", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(403).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify token
    res.status(200).json({ message: "Token is valid", user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
});

module.exports = router;
