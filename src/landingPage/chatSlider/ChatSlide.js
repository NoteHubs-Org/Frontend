import React, { useEffect, useState  } from "react";
import "./chatslider.css";
// import { PiXBold } from "react-icons/pi";
// import { MdOutlineGroups2 } from "react-icons/md";
// import ChatRow from "./ChatRow";
// import { IoMdSearch } from "react-icons/io";
// import ChatWindow from "./chatWindow.js";

const ChatSlide = ({ isVisible, toggleChat }) => {
  // const sidebarRef = useRef(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);
  const groups = [
    {
      icon: "🏥",
      courseName: "Degree Nursing",
      university: "Mt.Kenya University",
      notif: 2,
    },
    {
      icon: "💻",
      courseName: "Comp Science",
      university: "Mt.Kenya University",
      notif: 2,
    },
    {
      icon: "🧬",
      courseName: "Gen Science",
      university: "Kenyatta University",
      notif: 2,
    },
  ];
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
                  {groups.map((group, index) => (
              <div
                key={index}
                className={`group ${activeGroupIndex === index ? "group-active" : ""}`}
                onClick={() => setActiveGroupIndex(index)}
              >
                <div className="group-icon">{group.icon}</div>
                <div className="group-mid">
                  <div className="course-name">{group.courseName}</div>
                  <div className="university-name">{group.university}</div>
                </div>
                <div className="notif-number">{group.notif}</div>
              </div>
            ))}
              </div>
          </div>
          {/* right chat side */}
          <div className="chat-modal-right">
              <div className="chat-right-top">
                  <div>
                      <div className="chat-right-title">Degree Nursing (BSCN87265)</div>
                      <div className="group-population">100 students | Mt.Kenya University</div>
                  </div>
                  <button onClick={toggleChat} className="X-remove-btn">✕</button>
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
