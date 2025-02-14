import React from 'react';

const CircularProfile = ({ imageUrl, size=50 }) => {
  return (
    <div className="profile-container" style={{ width:`${size}px`, height:`${size}px`}}>
      {imageUrl ? (
        <img src={imageUrl} alt="Profile" className="profile-image" />
      ) : (
        <div className="default-icon">👤</div> 
      )}
    </div>
  );
};

export default CircularProfile;