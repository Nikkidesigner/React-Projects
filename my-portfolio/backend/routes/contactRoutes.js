const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Add a new contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
// save data into database
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save contact.', error: error.message });
  }
});

module.exports = router;
