import React, { useState } from "react";
import "./Signup.css";
import { validateSignupForm } from "./validation";
import { useNavigate } from "react-router-dom";
import user_icon from "../images/user.png";
import email_icon from "../images/email.png";
import password_icon from "../images/password.png";
import phone_icon from "../images/phone.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profilePicture: null, // Add this line
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form data
    const validationErrors = validateSignupForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Display validation errors
      return;
    }
  
    // Prepare the FormData object
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    if (formData.profilePicture) {
      data.append("profilePicture", formData.profilePicture);
    }
  
    try {
      const response = await fetch("https://backend-inky-iota.vercel.app/api/signup", {
        method: "POST",
        body: data,
      });
  
      if (!response.ok) {
        // If response status is not ok, handle errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // On success, navigate to login
      const result = await response.json();
      console.log("Signup successful:", result);
      navigate("/login");
    } catch (err) {
      console.error("Error during signup:", err);
      setErrors({ server: "Something went wrong. Please try again later." });
    }
  };
  

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <img src={user_icon} alt="User Icon" className="input-icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
        </div>

        <div className="input-group">
          <img src={email_icon} alt="Email Icon" className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input-group">
          <img src={phone_icon} alt="Phone Icon" className="input-icon" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        
        <div className="input-group">

  <label htmlFor="profilePicture" className="file-label">
    <img src={user_icon} alt="Profile Icon" className="input-icon" />
    <span>Upload Profile Picture</span>
  </label>
  <input
    type="file"
    id="profilePicture"
    name="profilePicture"
    accept="image/*"
    onChange={handleChange}
    className="file-input"
  />
  {errors.profilePicture && (
    <div className="error-message">{errors.profilePicture}</div>
  )}
</div>

        <div className="input-group">
          <img src={password_icon} alt="Password Icon" className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="input-group">
          <img
            src={password_icon}
            alt="Confirm Password Icon"
            className="input-icon"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="Signup-button">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="signup-footer">
  <p>
    Already a user? <a href="/login" className="login-link">Login</a> now!
  </p>
</div>

    </div>
  );
};

export default Signup;
