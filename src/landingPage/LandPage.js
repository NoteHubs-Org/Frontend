import React from "react";
import Profile from "../header/Profile";
import { Routes, Route } from "react-router-dom"; 
import Dashboard from "./L_Body/Dashboard";
import UploadPage from "../pages/uploads/UploadPage";
import ChatUI from "../pages/chatAIPage/AIChat";

const LandPage = ({ isProfileVisible, toggleProfile, toggleSidebar, isExpanded }) => {
  return (
    <>
      <Profile isOpen={isProfileVisible} toggleProfile={toggleProfile} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/summarize" element={<UploadPage />} />
        <Route path="/noteai" element={<ChatUI />} />
        <Route path="/groups" element={<Dashboard />} />
        <Route path="/QAs" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default LandPage;