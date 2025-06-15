import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import MyLibrary from "./pages/Library/MyLibrary";
import Footer from "./footer/Footer";
import Profile from "./header/Profile";
import ChatSlide from "./landingPage/chatSlider/ChatSlide";
import UploadPage from "./pages/uploads/UploadPage";
import Dashboard from "./landingPage/L_Body/Dashboard";
import ChatUI from "./pages/chatAIPage/AIChat";
import AuthRoutes from "./authRoutes/AuthRoutes";
import { AuthProvider } from "./authRoutes/authContext";
import ProtectedLayout from "./authRoutes/ProtectedLayout";

function LayoutWrapper() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  
  const toggleChat = () => setIsChatVisible(!isChatVisible);
  const toggleProfile = () => setIsVisible(!isVisible);
  const toggleSidebar = () => setIsExpanded(!isExpanded);
  return (
    <>
      <Header toggleProfile={toggleProfile} toggleChat={toggleChat} />
      <Profile isOpen={isVisible} toggleProfile={toggleProfile} />
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      {isChatVisible && <ChatSlide toggleChat={toggleChat} />}

      {/* This replaces LandPage logic */}
      <div className={`main-content ${isExpanded ? 'sidebar-expanded' : ''}`}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

function App() {

  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route element={<LayoutWrapper />}>
            <Route index element={<Dashboard />} />
            <Route path="summarize" element={<UploadPage />} />
            <Route path="noteai" element={<ChatUI />} />
            <Route path="groups" element={<Dashboard />} />
            <Route path="QAs" element={<Dashboard />} />
            <Route path="library" element={<MyLibrary />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}


export default App;
