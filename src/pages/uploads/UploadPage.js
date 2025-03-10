import React, { useState } from "react";
import "./upload.css";
import FileUpload from "./FileUpload";
import { uploadFiles } from "./upload";
import TextEditor from "./TextEditor";

const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(""); // Store summary text
  const [editorEnabled, setEditorEnabled] = useState(false); // Control editor state

  const handleSummarize = async () => {
    setLoading(true);
    const result = await uploadFiles(files); // Assume this returns the summary
    console.log(result)
    setSummary(result); // Store fetched summary
    setEditorEnabled(true); // Enable editor
    setLoading(false);
  };

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
      <FileUpload files={files} setFiles={setFiles} />

      {/* Summarize Button */}
      <div className="disabled-div" onClick={handleSummarize} disabled={loading}>
        {loading ? (
          <>
            Summarizing <span className="loader"></span>
          </>
        ) : (
          "✨ Summarize Document"
        )}
      </div>

      {/* Text Editor (Disabled Until Summary is Available) */}
      <h3>Summarized Document</h3>
      <TextEditor content={summary} isEnabled={editorEnabled} />
    </div>
  );
};

export default UploadPage;
