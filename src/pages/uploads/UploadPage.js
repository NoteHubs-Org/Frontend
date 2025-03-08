import React, { useState } from "react";
import "./upload.css";
import FileUpload from "./FileUpload";
import { uploadFiles } from "./upload";

const UploadPage = () => {
  const [files, setFiles] = useState([]);
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
        <FileUpload
          files={files}
          setFiles={setFiles}
        />


        {/* Disabled Button */}
      <button className="disabled-btn" onClick={() => uploadFiles(files)}>✨ Summarize Document</button>
    </div>
  );
};

export default UploadPage;
