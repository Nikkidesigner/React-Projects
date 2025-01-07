import React, { useState } from "react";
import Back from "../common/back/Back";  // Assuming Back component is for the header section
import "./profile.css";  // New profile-specific styles

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    class: "B.Tech CSE",
    prn: "123456789",
    email: "john.doe@example.com",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logged out");
  };

  return (
    <>
      <Back title="My Profile" />
      <section className="profile padding">
        <div className="container shadow flexSB">
          <div className="profile-info">
            <h1>Profile Information</h1>
            <form>
              <div className="flexSB">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={profile.fullName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={profile.class}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="prn"
                placeholder="PRN Number"
                value={profile.prn}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Change Password"
                value={profile.password}
                onChange={handleInputChange}
              />
              <button className="primary-btn">Update Profile</button>
            </form>

            <div className="logout-section">
              <button className="logout-btn" onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16 13v-2H7V8l-5 4 5 4v-3h9v-2zm4-8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v10z"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
