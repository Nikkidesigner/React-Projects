import React, { useEffect } from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/homepage"); // Redirect logged-in users to homepage
    }
  }, [navigate]);
  
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1>Welcome to CodewidNikki</h1>
        <p>
          An educational platform for software engineers. Join our community to access academic notes, coding tutorials, React projects, and much more!
        </p>
      </div>

      <div className="welcome-actions">
        <button onClick={() => navigate("/signup")} className="welcome-button signup-button">
          Sign Up
        </button>
        <button onClick={() => navigate("/login")} className="welcome-button login-button">
          Login
        </button>
      </div>

      <div className="welcome-footer">
        <p>Explore topics like:</p>
        <ul>
          <li>Academic Notes</li>
          <li>Java Coding and Theory</li>
          <li>JavaScript Tutorials</li>
          <li>React Projects</li>
          <li>Software Engineering Resources</li>
        </ul>
        <p>
          Join our community to grow as a developer and access the resources you need for success.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
