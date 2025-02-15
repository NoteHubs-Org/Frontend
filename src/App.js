import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import LandPage from './landingPage/LandPage';
import Footer from './footer/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Header toggleProfile={toggleProfile} />
      <LandPage isProfileVisible={isVisible} toggleProfile={toggleProfile} />
      <Footer />
    </>
  );
}

export default App;
