import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import email_icon from "../images/email.png";
import password_icon from "../images/password.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form data:", formData); // Log the form data
    try {
      const response = await fetch("https://backend-inky-iota.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
        alert("Login successful!");

        // Store the token in localStorage
        localStorage.setItem("token", result.token);
        navigate("/homepage"); //redirect to homepage
      } 
      else {
        const error = await response.json();
        setError(error.error || "Login failed!");
      }
    } catch (err) {
      console.error("Request error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <img src={email_icon} alt="Email Icon" className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
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
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="login-actions">
          <p>
            {" "}
            New user?{" "}
            <a href="/signup" className="login-link">
              Sign up
            </a>{" "}
            now!
          </p>
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
