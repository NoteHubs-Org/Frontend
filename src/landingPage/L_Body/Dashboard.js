import React from "react";
import "./dashboard.css";
import { FaFileAlt, FaRobot, FaUsers } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";
import StudyDashboard from "./DashPage";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-body">
      <div className="section-header">
        <h1 className="section-title">Welcome to NoteHubs</h1>
        <span className="section-badge">Education Platform</span>
      </div>
      <div className="dashboard-container">
        {/* ChatPDF Feature */}
        <div onClick={() => navigate("/summarize")} className="feature-card chatpdf">
          <div className="feature-icon"><FaFileAlt  /></div>
          <h4>Summarize Documents</h4>
          <p>Use ChatPDF to generate summaries & extract key points.</p>
        </div>
        

        {/* Brainy Assistant Feature */}
        <div onClick={() => navigate("/NoteAI")} className="feature-card brainy">
          <div className="feature-icon" ><FaRobot /></div>
          <h4>Ask Brainy</h4>
          <p>Get instant answers & smart study insights.</p>
        </div>

        {/* Study Hubs Feature */}
        <div className="feature-card study-hubs">
          <div className="feature-icon" ><FaUsers /></div>
          <h4>Explore Study Hubs</h4>
          <p>Join study groups & collaborate with peers.</p>
        </div>
        <div className="feature-card chatpdf">
          <div className="feature-icon" >< FaFileAlt /></div>
          <h4>Convert Documents</h4>
          <p>Fast PDF to Word, Excel, PPT, and more—effortless and accurate!</p>
        </div>
      </div>
      <div>
        <StudyDashboard />
      </div>
      <div className="recent-mess">
        <h4>Recent messages in your chats</h4>
        <div className="rec-div">
          <div>
            <p><span>Start conversation</span> in your chats and follow courses to <span>get resources</span></p>
            <button className="chats-btn">
              <PiChatsCircle className="btn-icon" />
              Open Chats
            </button>
          </div>
          <div className="image-content">
            <img src={assets.svgimg} alt=""/>
          </div>
          </div>
      </div>
      </div>
  );
};

export default Dashboard;
