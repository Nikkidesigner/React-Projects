import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSection.css";
import logo from "../images/logopngv4.png";

const ProfileSection = () => {
  const [user, setUser ] = useState(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to access this page.");
      navigate("/login");
    } else {
      fetch("https://backend-inky-iota.vercel.app/api/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token invalid or expired");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched user data form data:", data.user);
          setUser (data.user); // Assuming the user data is returned
          console.log("Fetched user data stored in data.user:", data.user); 
        })
        .catch(() => {
          alert("Error fetching profile.");
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  // Check if user is null or does not have the profileImage
  if (!user || !user.profileImage) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <header className="homepage-header">
        <a href="/homepage" className="homepage-logo-link">
          <img src={logo} alt="Logo" className="homepage-logo" />
        </a>
        <h1 className="homepage-title">CodewidNikki</h1>
        <div className="header-actions">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={user.profileImage}
            alt="Profile"
            className="profile-image"
          />
          <h2>{user.username}</h2>
        </div>
        <div className="profile-details">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;