const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Route: Register User
router.post("/signup", async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    // Check if the email or phone already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ error: "Email or phone number already exists" });
    }

    // Create a new user with the provided details (password will be hashed in the model)
    const user = new User({ username, email, phone, password });

    await user.save(); // Save the user to the database
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
