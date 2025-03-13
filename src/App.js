import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import LandPage from "./landingPage/LandPage";
import Sidebar from "./landingPage/sidebar/Sidebar";
import MyLibrary from "./pages/Library/MyLibrary";
import Footer from "./footer/Footer";
import Profile from "./header/Profile";
import ChatSlide from "./landingPage/chatSlider/ChatSlide";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatExpanded, setChatExpanded] = useState(false)

  const toggleProfile = () => setIsVisible(!isVisible);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const openChatSlide = () => {
    if (!isChatExpanded) {
      setChatExpanded(true); // Only open, never close from icon
    }
  };
  
  const closeChatSlide = () => {
    setChatExpanded(false); // Close only from button inside chat
  };
  

  const location = useLocation();

  return (
    <>
      <Header toggleProfile={toggleProfile} openChatSlide={openChatSlide} />
      <Sidebar toggleSidebar={toggleSidebar} isExpanded={isExpanded} className="sidebar" />
      <Profile isOpen={isVisible} toggleProfile={toggleProfile} />
      <ChatSlide isExpanded={isChatExpanded} closeChatSlide={closeChatSlide} />
      
      <Routes>
        <Route path="/*" element={<LandPage isProfileVisible={isVisible} toggleProfile={toggleProfile} toggleSidebar={toggleSidebar} isExpanded={isExpanded} />} />
        <Route path="/library" element={<MyLibrary />} />
      </Routes>
      {location.pathname !== "/NoteAI" && <Footer />}
    </>
  );
}

export default App;
