import React, {  useRef } from "react";
import "./chatslider.css";
import { PiXBold } from "react-icons/pi";
import { MdOutlineGroups2 } from "react-icons/md";
import ChatRow from "./ChatRow";
import { IoMdSearch } from "react-icons/io";
import ChatWindow from "./chatWindow.js";

const ChatSlide = () => {
  const sidebarRef = useRef(null);

  return (
    <div class="chat-overlay" id="chatOverlay">
      <div class="chat-modal">
          {/* left chat side */}
          <div className="chat-modal-left">
              <div className="my-groups">
                <div>👥</div>
                <h2>My Groups</h2>
              </div>
              
              <div className="search">
                <div >🔍</div>
                <input type="text" placeholder="Find new groups" />
              </div>
              
              <div className="groups-container">
                  <div className="group">
                      <div className="group-icon">🏥</div>
                      <div className="group-mid">
                          <div className="course-name">Degree Nursing</div>
                          <div className="university-name">Mt.Kenya University</div>
                      </div>
                      <div className="notif-number">2</div>
                  </div>
                  
                  <div className="group">
                      <div className="group-icon">💻</div>
                      <div className="group-mid">
                          <div className="course-name">Comp Science</div>
                          <div className="university-name">Mt.Kenya University</div>
                      </div>
                      <div className="notif-number" style="">2</div>
                  </div>
                  
                  <div className="group">
                      <div className="group-icon">🧬</div>
                      <div className="group-mid">
                          <div className="course-name">Gen Science</div>
                          <div className="university-name">Kenyatta University</div>
                      </div>
                      <div className="notif-number">2</div>
                  </div>
              </div>
          </div>
          {/* right chat side */}
          <div className="chat-modal-right">
              <div className="chat-right-top" style="">
                  <div>
                      <div className="chat-right-title">Degree Nursing (BSCN87265)</div>
                      <div className="group-population">100 students | Mt.Kenya University</div>
                  </div>
                  <button onclick={toggleChat()} className="X-remove-btn">✕</button>
              </div>
              
              <div className="chat-right-mid">
                  {/* -- Messages would go here  */}
                  <div style="text-align: center; padding: 40px; color: #64748b;">
                      <div style="font-size: 48px; margin-bottom: 16px;">💬</div>
                      <h3 style="font-size: 20px; margin-bottom: 8px; color: #1e293b;">Start a conversation</h3>
                      <p>Send a message to connect with your classmates</p>
                  </div>
              </div>
              
              <div className="chat-right-bottom" >
                  <div >
                      <input type="text" style="" placeholder="Type here..." />
                      <button style="width: 48px; height: 48px; background: linear-gradient(45deg, #4f46e5, #7c3aed); border: none; border-radius: 50%; color: white; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; font-size: 20px;" onmouseover="this.style.transform='scale(1.1) rotate(15deg)'; this.style.boxShadow='0 4px 20px rgba(79, 70, 229, 0.4)';" onmouseout="this.style.transform='scale(1) rotate(0deg)'; this.style.boxShadow='none';">➤</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ChatSlide;
