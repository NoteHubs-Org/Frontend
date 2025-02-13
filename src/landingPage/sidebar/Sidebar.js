import React, { useState } from 'react';
import { BiMenu, BiX, BiGridAlt, BiUser, BiMessageSquareDetail, BiBookmark, BiFolder, BiBarChartAlt2, BiLogOut, } from 'react-icons/bi';
import { IoAdd } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineGroups2 } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import './sidebar.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=book_4_spark" />

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Sidebar Container */}
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        {/* Menu Button */}
        <button className="menu-button" onClick={toggleSidebar}>
          {isExpanded ? <BiX /> : <BiMenu />}
        </button>

        {/* Sidebar Content */}
        <nav className="nav">
          <div className='add-doc'>
            <IoAdd className='nav_icon add-icon'/>
            {isExpanded && 
              <p className='add-p'>Add New Doc</p>
            }
          </div>
          <div className="nav_list">
            <a href="#" className="nav_link active">
              <BiGridAlt className="nav_icon" />
              <span className="nav_name">Dashboard</span>
            </a>
            <a href="#" className="nav_link">
              <IoLibraryOutline className='nav_icon' />
              <span className="nav_name">My Library</span>
            </a>
            <a href="#" className="nav_link">
            <span class="material-symbols-outlined">
              book_4_spark
            </span>
              <span className="nav_name">Note AI</span>
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
          <a href="#" className="nav_link">
            <BiLogOut className="nav_icon" />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;