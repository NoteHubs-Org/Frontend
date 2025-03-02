import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Profile from "../header/Profile";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Dashboard from "./L_Body/Dashboard";
import UploadPage from "../pages/uploads/UploadPage";
import ChatUI from "../pages/chatAIPage/AIChat";
import Footer from "../footer/Footer";

const LandPage = ({ isProfileVisible, toggleProfile, toggleSidebar, isExpanded }) => {
  const location = useLocation(); 

  const isNoteAIPage = location.pathname === "/NoteAI";

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        isExpanded={isExpanded}
        className="sidebar"
      />
      <Profile isOpen={isProfileVisible} toggleProfile={toggleProfile} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/summarize" element={<UploadPage />} />
        <Route path="/NoteAI" element={<ChatUI />} />
        <Route path="/groups" element={<Dashboard />} />
        <Route path="/QAs" element={<Dashboard />} />
      </Routes>
      {!isNoteAIPage && <Footer />}
    </>
  );
};

export default LandPage;