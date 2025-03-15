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
        <div className="chat-left">
          <div className="left-top">
            <h3><MdOutlineGroups2 className="left-title-icon" />My Groups</h3>
            <div class="chat-search-container">
              <input type="text" class="chat-search-input" placeholder="Find new groups" />
              <IoMdSearch className='chat-search-icon' />
            </div>
            <ChatRow 
              title={"Degree Nursing"}
              campusName={"Mt.Kenya University"}
              notifsNo={2}
            />
            <ChatRow 
              title={"Comp Science"}
              campusName={"Mt.Kenya University"}
              notifsNo={2}
            />
            <ChatRow 
              title={"Gen Science"}
              campusName={"Kenyatta University"}
              notifsNo={2}
            />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSlide;
