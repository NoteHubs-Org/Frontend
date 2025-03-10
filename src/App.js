import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import LandPage from "./landingPage/LandPage";
import Sidebar from "./landingPage/sidebar/Sidebar";
import MyLibrary from "./pages/Library/MyLibrary";
import Footer from "./footer/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProfile = () => setIsVisible(!isVisible);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const location = useLocation();

  return (
    <>
      <Header toggleProfile={toggleProfile} />
      <Sidebar toggleSidebar={toggleSidebar} isExpanded={isExpanded} className="sidebar" />
      
      <Routes>
        <Route path="/*" element={<LandPage isProfileVisible={isVisible} toggleProfile={toggleProfile} toggleSidebar={toggleSidebar} isExpanded={isExpanded} />} />
        <Route path="/library" element={<MyLibrary />} />
      </Routes>
      {location.pathname !== "/NoteAI" && <Footer />}
    </>
  );
}

export default App;
