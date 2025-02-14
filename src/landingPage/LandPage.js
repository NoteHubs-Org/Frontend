import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Profile from "../header/Profile";

const LandPage = ({ isProfileVisible, toggleProfile }) => {
  return (
    <>
      <Sidebar className="sidebar" />
      <Profile isOpen={isProfileVisible} toggleProfile={toggleProfile} />
    </>
  );
};

export default LandPage;
