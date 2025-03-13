import React from 'react'
import { MdOutlineGroupAdd } from "react-icons/md";

const ChatRow = ({ title, notifsNo, campusName }) => {
  const notifications = toString(notifsNo);
  
  return (
    <div className='chat-row'>
      <div><MdOutlineGroupAdd /></div>
      <div>
        <h4>{title}</h4>
        <h5>{ campusName}</h5>
      </div>
      <div>{notifications}</div>
    </div>
  )
}

export default ChatRow