import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdEmail } from 'react-icons/md'; // For Material Design Icons
import { CiPhone } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import Particle from "../Particle"; // Include this if you want particle effect as in your other pages.
import "./Contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a backend)
    console.log("Form Submitted: ", formData);
    // Reset form after submission
    setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <div className="contact" id="contact">
       <h2><strong className="purple">Contact Me</strong></h2>
      <p>Feel free to reach out to me using the form below!</p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;