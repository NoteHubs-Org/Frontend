import React from "react";
import "./dashboard.css";
import { FaFileAlt, FaRobot, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
      {/* ChatPDF Feature */}
      <div className="feature-card chatpdf">
        <FaFileAlt className="feature-icon" />
        <h4>Summarize Documents</h4>
        <p>Use ChatPDF to generate summaries & extract key points.</p>
      </div>

      {/* Brainy Assistant Feature */}
      <div className="feature-card brainy">
        <FaRobot className="feature-icon" />
        <h4>Ask Brainy</h4>
        <p>Get instant answers & smart study insights.</p>
      </div>

      {/* Study Hubs Feature */}
      <div className="feature-card study-hubs">
        <FaUsers className="feature-icon" />
        <h4>Explore Study Hubs</h4>
        <p>Join study groups & collaborate with peers.</p>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;
