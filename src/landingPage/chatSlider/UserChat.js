import React from 'react'
import HeaderProfile from "../../header/HeaderProfile"

const UserChat = ({ sender, txtMessage, time}) => {
  return (
    <div className="message-info">
      <HeaderProfile
       imageUrl={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
       size={30} 
      />
      <div className='msg-info-in'>
        <div>
          <span className="message-sender">{sender}</span>
          <p className="message-text">{txtMessage}</p>
      </div>
        <span className="message-time">{time}</span>
      </div>
    </div>
  )
}

export default UserChat