import React, { useEffect  } from "react";
import "./chatslider.css";
// import { PiXBold } from "react-icons/pi";
// import { MdOutlineGroups2 } from "react-icons/md";
// import ChatRow from "./ChatRow";
// import { IoMdSearch } from "react-icons/io";
// import ChatWindow from "./chatWindow.js";

const ChatSlide = ({ isVisible, toggleChat }) => {
  // const sidebarRef = useRef(null);
  useEffect(() => {
    const chatOverlay = document.getElementById("chatOverlay");
    if (isVisible) {
      chatOverlay.classList.add("visible");
    } else {
      chatOverlay.classList.remove("visible");
    }
  }, [isVisible]);


  return (
    <div className="chat-overlay" id="chatOverlay">
      <div className="chat-modal">
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
                      <div className="notif-number">2</div>
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
              <div className="chat-right-top">
                  <div>
                      <div className="chat-right-title">Degree Nursing (BSCN87265)</div>
                      <div className="group-population">100 students | Mt.Kenya University</div>
                  </div>
                  <button onclick={toggleChat} className="X-remove-btn">✕</button>
              </div>
              
              <div className="chat-right-mid">
                  {/* -- Messages would go here  */}
                  <div className="msg-body">
                      <div>💬</div>
                      <h3>Start a conversation</h3>
                      <p>Send a message to connect with your classmates</p>
                  </div>
              </div>
              
              <div className="chat-right-bottom" >
                  <div >
                      <input type="text"placeholder="Type here..." />
                      <button className="send-msg-btn">➤</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ChatSlide;
