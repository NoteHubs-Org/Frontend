import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Profile from "../header/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./L_Body/Dashboard";

const LandPage = ({ isProfileVisible, toggleProfile }) => {
  return (
    <>
      <Sidebar className="sidebar" />
      <Profile isOpen={isProfileVisible} toggleProfile={toggleProfile} />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<Dashboard />} />
          <Route path="/NoteAi" element={<Dashboard />} />
          <Route path="/groups" element={<Dashboard />} />
          <Route path="/QAs" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default LandPage;
