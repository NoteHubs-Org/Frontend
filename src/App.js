import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import LandPage from "./landingPage/LandPage";
import Sidebar from "./landingPage/sidebar/Sidebar";
import MyLibrary from "./pages/Library/MyLibrary";
import Footer from "./footer/Footer";
import Profile from "./header/Profile";
import ChatSlide from "./landingPage/chatSlider/ChatSlide";
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
      <Sidebar toggleSidebar={toggleSidebar} isExpanded={isExpanded} toggleChat={toggleChat} />
      <Profile isOpen={isVisible} toggleProfile={toggleProfile} />
      {isChatVisible && <ChatSlide toggleChat={toggleChat} />}
      
      <LandPage
        isProfileVisible={isVisible}
        toggleProfile={toggleProfile}
        toggleSidebar={toggleSidebar}
        isExpanded={isExpanded}
      />
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* ✅ Public (unprotected) routes */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* 🔐 Protected routes group */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<LayoutWrapper />} />
          <Route path="/library" element={<MyLibrary />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
