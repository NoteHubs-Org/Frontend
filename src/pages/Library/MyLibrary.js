import React, { useState } from 'react'
import FileUpload from '../uploads/FileUpload'
import "./library.css"
import MyUploads from './MyUploads';
import LibColumn from './Lib_Column';
import { IoMdAdd } from "react-icons/io";

const MyLibrary = () => {  
  const [files, setFiles] = useState([]);
  return (
    <div className='library-container'>
      <div className="library-container1">
        <h2>Start your ✨ Ai-powered study session</h2>
        <div className='ai-uploads'><FileUpload 
        files={files}
        setFiles={setFiles}
         /></div>
        <span>✨ Use AI chat to summarize, rephrase and ask questions</span>
      </div>
      <MyUploads />
      <div className='library-containers'>
        <h2>My courses</h2>
        <div className="user-uploads">
          <LibColumn docName={'Document 1'} docTitle={"document one"} type={"course"} />
          <LibColumn docName={'Document 2'} docTitle={"document two"} type={"course"} />
        </div>
        <button className='addIcon-button'>{<IoMdAdd className='ad-icon'/>}Add Courses</button>
      </div>
      <div className='library-containers'>
        <h2>My Questions</h2>
        <div className="user-uploads">
          <LibColumn docName={'What is Osmoregulation 1'} docTitle={"Bsc. Microbiology"} type={"question"} />
          <LibColumn docName={'Nursing Code ethics'} docTitle={"Bsc. Nursing"} type={"question"} />
          <LibColumn docName={'Document 3'} docTitle={"document three"} type={"question"}/>
        </div>
        <button className='addIcon-button'>{<IoMdAdd className='ad-icon'/>}Ask a new question</button>
      </div>
    </div>
  )
}

export default MyLibrary