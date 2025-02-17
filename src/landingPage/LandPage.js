import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Profile from "../header/Profile";
import { Routes, Route } from "react-router-dom"; // Remove Router from here
import Dashboard from "./L_Body/Dashboard";
import UploadPage from "../uploads/UploadPage";

const LandPage = ({ isProfileVisible, toggleProfile, toggleSidebar, isExpanded }) => {
  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} 
      isExpanded={isExpanded}
      className="sidebar" />
      <Profile isOpen={isProfileVisible} toggleProfile={toggleProfile} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/summarize" element={<UploadPage />} />
        <Route path="/NoteAi" element={<Dashboard />} />
        <Route path="/groups" element={<Dashboard />} />
        <Route path="/QAs" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default LandPage;