import React from 'react'
import { MdOutlineGroupAdd } from "react-icons/md";

const ChatRow = ({ title, notifsNo, campusName }) => {  
  const notifsNumber = notifsNo.toString()
  return (
    <div className='chat-left-row'>
      <div className='icon-div'><MdOutlineGroupAdd className='chat-icon'/></div>
      <div className='middle-chat-left-row'>
        <h4>{title}</h4>
        <h6>{ campusName}</h6>
      </div>
      <div className='notif-no'><p>{notifsNumber}</p></div>
    </div>
  )
}

export default ChatRow