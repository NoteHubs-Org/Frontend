import React from "react";
import "./upload.css";

const UploadPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <h2 className="headerr">
        Upload <span className="highlight">multiple documents</span> and get more productive with AI
      </h2>

      {/* Upload Options */}
      <div className="grid">
        {[
          { label: "PDF/Doc", desc: "Notes, papers", icon: "📄" },
          { label: "Plain Text", desc: "Copy & paste", icon: "✏️" },
          { label: "Slides", desc: "Presentations", icon: "📊" },
          { label: "Link", desc: "Wikipedia, articles", icon: "🔗" },
          { label: "Audio", desc: "Class recordings", icon: "🎤" },
          { label: "Videos", desc: "YouTube videos", icon: "🎥" },
        ].map((item, index) => (
          <div key={index} className="option">
            <span className="icon">{item.icon}</span>
            <p className="title">{item.label}</p>
            <p className="description">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Upload Box */}
      <div className="upload-box">
        <h3 className="upload-title">Upload multiple files</h3>
        <button className="upload-btn">Browse your files</button>
        <p className="upload-info">Supported formats: .pdf, .doc, .docx, .pptx</p>
      </div>

      {/* Disabled Button */}
      <button className="disabled-btn">✨ Summarize Document</button>
    </div>
  );
};

export default UploadPage;
