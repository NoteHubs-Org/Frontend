import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import LandPage from './landingPage/LandPage';
import Footer from './footer/Footer';
import './footer/footer.css';
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <BrowserRouter>
      <Header toggleProfile={toggleProfile} />
      <LandPage isProfileVisible={isVisible} toggleProfile={toggleProfile}
      toggleSidebar={toggleSidebar}
      isExpanded={isExpanded} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;