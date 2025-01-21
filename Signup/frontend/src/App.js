import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/assets/Signup/Signup";
import Login from "./components/assets/login/login";
import Homepage from "./components/assets/homepage/Homepage";
import Welcome from "./components/assets/welcome/welcome";
import ProfileSection from "./components/assets/profile/ProfileSection";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<ProfileSection />} />
      </Routes>
    </Router>
  );
};

export default App;
