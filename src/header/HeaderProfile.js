import React from 'react';

const CircularProfile = ({ imageUrl }) => {
  return (
    <div className="profile-container">
      {imageUrl ? (
        <img src={imageUrl} alt="Profile" className="profile-image" />
      ) : (
        <div className="default-icon">👤</div> 
      )}
    </div>
  );
};

export default CircularProfile;