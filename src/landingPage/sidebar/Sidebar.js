import React, { useEffect, useRef } from "react";
import { BiMenu, BiGridAlt, BiBarChartAlt2, BiLogOut } from "react-icons/bi";
import { IoAdd, IoLibraryOutline } from "react-icons/io5";
import { MdOutlineGroups2 } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { HiChevronLeft } from "react-icons/hi2";
import "./sidebar.css";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const sidebarRef = useRef(null); // Ref to track the sidebar element

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExpanded && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close sidebar if open and clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, toggleSidebar]); // Only run when sidebar is open

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`} ref={sidebarRef}>
      {/* Menu Button */}
      <button
        className={`${isExpanded ? "x-button" : "menu-button"}`}
        onClick={toggleSidebar}
      >
        {isExpanded ? <HiChevronLeft /> : <BiMenu />}
      </button>

      {/* Sidebar Content */}
      <nav className="nav">
        <div className="add-doc">
          <IoAdd className="nav_icon add-icon" />
          {isExpanded && <p className="add-p">Add New Doc</p>}
        </div>

        {/* Navigation Links */}
        <div className="nav_list">
          <a href="#" className="nav_link active">
            <BiGridAlt className="nav_icon" />
            <span className="nav_name">Dashboard</span>
          </a>
          <a href="#" className="nav_link">
            <IoLibraryOutline className="nav_icon" />
            <span className="nav_name">My Library</span>
          </a>
          <a href="#" className="nav_link">
            <MdOutlineGroups2 className="nav_icon" />
            <span className="nav_name">Groups</span>
          </a>
          <a href="#" className="nav_link">
            <RiQuestionAnswerLine className="nav_icon" />
            <span className="nav_name">Questions</span>
          </a>
          <a href="#" className="nav_link">
            <BiBarChartAlt2 className="nav_icon" />
            <span className="nav_name">Stats</span>
          </a>
        </div>

        {/* Sign Out */}
        <a href="#" className="nav_link">
          <BiLogOut className="nav_icon" />
          <span className="nav_name">Sign Out</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
