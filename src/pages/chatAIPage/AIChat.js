import React, { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
//import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdSearch, MdFormatListBulleted, MdChatBubble, MdSettings } from "react-icons/md";
import "./ChatUI.css";
import sendToBackend from "./sendToBackend";
import Loader from "./Loader";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showCards, setShowCards] = useState(true);
  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + "px";
  };

  const formatResponse = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/(?:\r\n|\r|\n)/g, "<br>")
      .replace(/#<_[^>]+>/g, "");
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setShowCards(false);
    setInput("");
    textareaRef.current.style.height = "50px";
    setIsLoading(true);

    try {
      const aiResponse = await sendToBackend(input);

      if (aiResponse) {
        const formattedResponse = formatResponse(aiResponse);

        const aiMessage = {
          id: Date.now() + 1,
          sender: "ai",
          text: formattedResponse,
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        console.error("No response received to display.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleValue = (inputValue) => {
    setInput(inputValue);
  };

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    setTimeout(() => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, 100); 
  };

  useEffect(() => {
    scrollToBottom()

  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat With Brainy</div>

      <div className="chat-messages" ref={chatContainerRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">
              <div className="message-header">
                <strong>{msg.sender === "user" ? "You" : "Brainy🧠"}</strong>
              </div>
              <p dangerouslySetInnerHTML={{ __html: msg.text }} />
              {msg.image && <img src={msg.image} alt="AI Response" className="message-image" />}
            </div>
          </div>
        ))}

        {isLoading && (
          <>
            <Loader /> 
            <p>Brainy🧠 is thinking...</p>
          </>
        )}
      </div>

      {showCards && (
        <div className="cards-container">
          <div className="card" onClick={() => handleValue("Help me choose a thesis theme")}>
            <MdFormatListBulleted className="card-icon" />
            <p>Help choose a thesis theme.</p>
          </div>
          <div className="card" onClick={() => handleValue("Find 5 journals")}>
            <MdSearch className="card-icon" />
            <p>Find 5 journals.</p>
          </div>
          <div className="card" onClick={() => handleValue("Revise abstract")}>
            <MdChatBubble className="card-icon" />
            <p>Revise abstract.</p>
          </div>
          <div className="card" onClick={() => handleValue("Set up bibliography")}>
            <MdSettings className="card-icon" />
            <p>Set up bibliography.</p>
          </div>
        </div>
      )}

      <div className="chat-footer">
        <textarea
          ref={textareaRef}
          placeholder="Enter a prompt..."
          className="chat-input"
          value={input}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage}>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
