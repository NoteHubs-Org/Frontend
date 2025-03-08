import React from "react";
import { handleFiles, handleDrop } from "./upload.js";

const FileUpload = ({ files, setFiles }) => {
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-container">
      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, setFiles)}
      >
        <p>📂 Drag & Drop files<br />Or if you prefer</p>
        <label htmlFor="fileInput" className="browse-btn">Browse my files</label>
        <input 
          type="file" 
          id="fileInput" 
          multiple 
          hidden 
          onChange={(e) => handleFiles(e, setFiles)} 
        />
        <small>Supported files: pdf, doc, docx</small>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <span className="file-name">{file.name}</span>
              <div className="progress-bar"><span></span></div>
              <span className="delete-btn" onClick={() => removeFile(index)}>🗑️</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
