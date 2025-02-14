import React from 'react'
import { BsCloudArrowUpFill } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import './sidebar.css'

const New_PopUp = () => {
  return (
    <>
      <div className='div-row upload-cloud'>
        <BsCloudArrowUpFill className='popup-icon upload-icon' />
        <div>
          <h4>Upload</h4>
          <h5>Contribute to the community and earn premium</h5>
        </div>
      </div>
      <div className='div-row ask-quiz'>
        <RiQuestionnaireFill className='popup-icon question-icon' />
        <div>
          <h4>Ask Question</h4>
          <h5>Ask a study question and get answer in seconds</h5>
        </div>
      </div>
      <div className='div-row'>
        <IoIosPaper className='popup-icon notes-icon' />
        <div>
          <h4>Summarise Documents</h4>
          <h5>Turn all material into organised summaries</h5>
        </div>
      </div>
    </>
  )
}

export default New_PopUp
