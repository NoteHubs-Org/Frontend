import React, { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdSearch, MdFormatListBulleted, MdChatBubble, MdSettings } from "react-icons/md";
import "./ChatUI.css";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showCards, setShowCards] = useState(true);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = 
      Math.min(textareaRef.current.scrollHeight, 200) + "px"; 
  };
  
  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setShowCards(false);

    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: "This is a sample AI response.",
        image: "https://via.placeholder.com/150",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);

    setInput("");
    textareaRef.current.style.height = "50px";
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat With Brainy</div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">
              <div className="message-header">
                <strong>{msg.sender === "user" ? "You" : "ChatAI"}</strong>
              </div>
              <div className="message-text">{msg.text}</div>
              {msg.image && <img src={msg.image} alt="AI Response" className="message-image" />}
              <div className="message-actions">
                <FaThumbsUp />
                <FaThumbsDown />
              </div>
            </div>
          </div>
        ))}
      </div> 
      {showCards && (
        <div className="cards-container">
          <div className="card"><MdFormatListBulleted className="card-icon" /><p>Help choose a thesis theme.</p></div>
          <div className="card"><MdSearch className="card-icon" /><p>Find 5 journals.</p></div>
          <div className="card"><MdChatBubble className="card-icon"/><p>Revise abstract.</p></div>
          <div className="card"><MdSettings className="card-icon" /><p>Set up bibliography.</p></div>
        </div>
      )}
      <div className="chat-footer">
        <textarea
          ref={textareaRef}
          placeholder="Enter a prompt..."
          className="chat-input"
          value={input}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage}>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
