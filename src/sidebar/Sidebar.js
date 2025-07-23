import React, { useEffect, useRef, useState } from "react";
import { logout } from "../utils/authAPI";
import NewPopUp from './New_PopUp';
import {
  BiMenu,
  BiGridAlt,
  BiBarChartAlt2,
  BiLogOut
} from "react-icons/bi";
import { IoAdd, IoLibraryOutline } from "react-icons/io5";
import { MdOutlineGroups2 } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { HiChevronLeft } from "react-icons/hi2";
import "./sidebar.css";
import "./logout.css";
import { useAuth } from "../authRoutes/authContext";
import { useNavigate } from "react-router-dom";

// Logout Confirmation Component
const LogoutConfirmation = ({ isOpen, onConfirm, onCancel, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="logout-overlay">
      <div className="logout-modal">
        <h3 className="logout-title">
          {isLoading ? "Signing Out" : "Confirm Sign Out"}
        </h3>
        <p className="logout-message">
          {isLoading ? "Please wait while we sign you out..." : "Are you sure you want to sign out?"}
        </p>
        <div className="logout-buttons">
          <button 
            onClick={onCancel} 
            className="logout-cancel-btn"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="logout-confirm-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Signing Out...
              </>
            ) : (
              "Yes, Sign Out"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ isExpanded, toggleSidebar, toggleChat }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const { setUser } = useAuth();
  const toggleHidden = () => setIsHidden(!isHidden);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      await logout();
      setUser(null);
      navigate("/auth/login");
      setIsLoggingOut(false);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setShowLogoutConfirmation(false);
      setIsLoggingOut(false);
    }
  };

  const handleCancelLogout = () => {
    if (!isLoggingOut) {
      setShowLogoutConfirmation(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExpanded && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, toggleSidebar]);

  return (
    <>
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`} ref={sidebarRef}>
        {/* Toggle Button */}
        <button
          className={isExpanded ? "x-button" : "menu-button"}
          onClick={toggleSidebar}
        >
          {isExpanded ? <HiChevronLeft /> : <BiMenu />}
        </button>

        <nav className="nav">
          {/* Add New Document */}
          <div className="add-doc" onClick={toggleHidden}>
            <IoAdd className="nav_icon add-icon" />
            {isExpanded && (
              <>
                <p className="add-p">Add New Doc</p>
                <div className={isHidden ? "popup-div" : "hide-popup"}>
                  <NewPopUp />
                </div>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <div className="nav_list">
            <SidebarLink
              href="/"
              icon={BiGridAlt}
              label="Dashboard"
              isExpanded={isExpanded}
              active
            />
            <SidebarLink
              href="/library"
              icon={IoLibraryOutline}
              label="My Library"
              isExpanded={isExpanded}
            />
            <SidebarLink
              href="#"
              icon={MdOutlineGroups2}
              label="Groups"
              isExpanded={isExpanded}
              onClick={toggleChat}
            />
            <SidebarLink
              href="#"
              icon={RiQuestionAnswerLine}
              label="Questions"
              isExpanded={isExpanded}
            />
            <SidebarLink
              href="#"
              icon={BiBarChartAlt2}
              label="Stats"
              isExpanded={isExpanded}
            />
          </div>

          {/* Sign Out */}
          <SidebarLink
            href="#"
            icon={BiLogOut}
            label="Sign Out"
            isExpanded={isExpanded}
            onClick={handleLogoutClick}
          />
        </nav>
      </div>

      {/* Logout Confirmation Popup */}
      <LogoutConfirmation
        isOpen={showLogoutConfirmation}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
        isLoading={isLoggingOut}
      />
    </>
  );
};

// Reusable sidebar link component
const SidebarLink = ({ href, icon: Icon, label, isExpanded, active = false, onClick }) => (
  <div className={`nav_item ${isExpanded ? "expanded" : ""}`}>
    <a href={href} className={`nav_link ${active ? "active" : ""}`} onClick={onClick}>
      <Icon className="nav_icon" />
      <span className="nav_name">{label}</span>
    </a>
  </div>
);

export default Sidebar;