import React from "react";
import { FaBell, FaEnvelope, FaPlus } from "react-icons/fa";
import CircularProfile from "./HeaderProfile";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./profile.css";

const Profile = ({ toggleProfile, isOpen }) => {
  return (
    <div className={`profile-wrapper ${isOpen ? "active" : ""}`}>
      <div className="profileContainer">
        <IoMdSettings className="sett" />
        <MdKeyboardArrowRight className="arrow" onClick={toggleProfile} />

        <div className="profile-avatar">
          <CircularProfile 
            imageUrl={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            size={90} 
          />
          <div className="avatar-circle">            
            <FaPlus className="avatar-add" size={14} />
          </div>
        </div>

        {/* User Info */}
        <h3 className="profile-name">Alvin Saville</h3>
        <p className="profile-role">Student</p>

        {/* Notifications & Updates */}
        <div className="profile-updates">
          <div className="update-item">
            <FaEnvelope className="update-icon" />
            <span>Notification</span>
            <span className="update-count">7</span>
          </div>
          <div className="update-item">
            <FaBell className="update-icon" />
            <span>Deadlines</span>
            <span className="update-count">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
