import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import LandPage from './landingPage/LandPage';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Header toggleProfile={toggleProfile} />
      <LandPage isProfileVisible={isVisible} toggleProfile={toggleProfile} />
    </>
  );
}

export default App;
