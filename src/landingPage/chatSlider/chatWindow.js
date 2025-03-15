import { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import UserChat from "./UserChat"
import "./chatslider.css";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Kingsley Kingston", text: "woza", time: "1w" },
    { id: 2, sender: "Festus Bao", text: "Hello", time: "1w" },
    { id: 3, sender: "Barrack Owoko", text: "DO A TEST FOR STARCH IN A LEAF", time: "1w" },
    { id: 4, sender: "Jhan Kamau", text: "Hae hae guys", time: "6d" },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", text: currentMessage, time: "Just now" },
      ]);
      setCurrentMessage("");
    }
  };
  const groupPopulation = 100;

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div>
          <h4>Degree Nursing (BSCN87265)</h4>
          <h6>
            {groupPopulation.toString() + " students"} | Mt.Kenya University
          </h6>
        </div>
        <HiOutlineDotsHorizontal className="chat-menu-icon"/>
      </div>

      {/* Messages List */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <UserChat
              sender={msg.sender}
              txtMessage={msg.text}
              time={msg.time}
            />
          </div>
        ))}
        {/* Invisible div to scroll to the bottom */}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type here..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className=""
        />
        <button className="send-btn" onClick={sendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
