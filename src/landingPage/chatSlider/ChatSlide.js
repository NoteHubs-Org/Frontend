import React, {  useRef } from "react";
import "./chatslider.css";
import { PiXBold } from "react-icons/pi";
import { MdOutlineGroups2 } from "react-icons/md";
import ChatRow from "./ChatRow";
import { TiGroup } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAddCircle, MdExplore } from "react-icons/md";

const ChatSlide = ({ isExpanded, closeChatSlide }) => {
  const sidebarRef = useRef(null);

  return (
    <div className={`chatslide ${isExpanded ? "expand" : ""}`} ref={sidebarRef}>
      <div className="close-btn" onClick={closeChatSlide}><PiXBold className="header-icon btn-icon" /></div>
      <div className="chat-body">
        <div className="chet-left">
         <div>
            <h3><MdOutlineGroups2 />My Groups</h3>
            <div class="search-container">
              <input type="text" class="search-input" placeholder="Search for courses, books, or documents..." />
              <IoMdSearch className='header-icon' />
            </div>
            <ChatRow 
              title={"Degree Nursing"}
              campusName={"Mt.Kenya University"}
              notifsNo={2}
            />
         </div>
         <h3>Recommended for you</h3>
          <div>
            <div>
              <MdOutlineGroups2 />
              <p>Study group for kjsea</p>
            </div>
            <div>
              <MdOutlineGroups2 />
              <p>Math</p>
            </div>
            <div>
              <MdOutlineGroups2 />
              <p>Computer Science</p>
            </div>
          </div>
          <div className="chat-lef-bottom">
            <div>
              <TiGroup />
              <h4>Groups</h4>
            </div>
            <div>
              <MdExplore />
              <h4>Explore</h4>
            </div>
            <div>
              <MdOutlineAddCircle />
              <h4>Create</h4>
            </div>
          </div>
        </div>
        <div className="chat-right">

        </div>
      </div>
    </div>
  );
};

export default ChatSlide;
