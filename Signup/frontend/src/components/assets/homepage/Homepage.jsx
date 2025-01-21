import React from "react";
import "./Homepage.css";
import logo from "../images/logopngv4.png"; // Replace with your actual logo file
import reactImg from "../images/react.JPG"; // Example title card images
import dbImg from "../images/database.png";
import arrayImg from "../images/array.png";
import gfgImg from "../images/gfg.png";
import beginnerImg from "../images/beginner.jpg";
import notesImg from "../images/notes.jpg";
import dsaImg from "../images/dsa.jpg";
import jsImg from "../images/javascript.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to access the homepage.");
      navigate("/login"); // Redirect to login if no token
    } else {
      fetch("https://backend-inky-iota.vercel.app/api/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in headers
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token invalid or expired");
          }
          return res.json();
        })
        .then(() => console.log("Token verified"))
        .catch((err) => {
          console.error(err);
          alert("Session expired. Please login again.");
          localStorage.removeItem("token"); // Clear token
          navigate("/login");
        });
    }
  }, [navigate]);
  
  const handleProfileClick = () => {
    navigate("/profile"); // Redirect to profile page
  };


  const [tiles] = useState([
    {
      title: "React Projects",
      image: reactImg,
      link: "https://github.com/Nikkidesigner/React-Projects",
    },
    {
      title: "Advanced Database Systems",
      image: dbImg,
      link: "https://github.com/Nikkidesigner/Advanced-database-system",
    },
    {
      title: "Problems on Array in Java",
      image: arrayImg,
      link: "https://github.com/Nikkidesigner/problems-on-array-java-",
    },
    {
      title: "GFG - Top 50 String Coding Problems",
      image: gfgImg,
      link: "https://github.com/Nikkidesigner/GFG-Top-50-String-Coding-Problems-for-Interviews-solutions",
    },
    {
      title: "Beginner Level Problems in Java",
      image: beginnerImg,
      link: "https://github.com/Nikkidesigner/Beginner-level-problems-java-",
    },
    {
      title: "Academic Notes",
      image: notesImg,
      link: "https://github.com/Nikkidesigner/Academic-Notes",
    },
    {
      title: "DSA in Java",
      image: dsaImg,
      link: "https://github.com/Nikkidesigner/DSA-in-java",
    },
    {
      title: "JavaScript Tutorials",
      image: jsImg,
      link: "https://github.com/Nikkidesigner/javascript-fundamentals",
    },
  ]);


  return (
    <div className="user-homepage">
      <header className="homepage-header">
  <a href="/homepage" className="homepage-logo-link">
    <img src={logo} alt="Logo" className="homepage-logo" />
  </a>
  <h1 className="homepage-title">CodewidNikki</h1>
  <div className="header-actions">
  <button className="profile-button" onClick={handleProfileClick}>My Profile</button>
  </div>
</header>


      <main className="homepage-main">
        <h2 className="homepage-welcome">Welcome to CodewidNikki!</h2>
        <p className="homepage-description">
          Explore our resources for software engineers. Click on a topic to get
          started.
        </p>

        <div className="tile-container">
          {tiles.map((tile, index) => (
            <a key={index} href={tile.link} className="tile-card">
              <img src={tile.image} alt={tile.title} className="tile-image" />
              <h3 className="tile-title">{tile.title}</h3>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
