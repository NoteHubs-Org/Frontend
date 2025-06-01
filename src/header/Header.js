import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./header.css"
import CircularProfile from './HeaderProfile';

const Header = ({ toggleProfile, openChatSlide }) => {
  return (
    <div className='header'>
      <h1 className='logo-name'>NoteHub</h1>

      <div class="search-container">
          <div class="search-icon">🔍</div>
          <input type="text" class="search-input" placeholder="Search for courses, books, or documents..."/>
      </div>

      <div className='header-right'>
        <button className='header-icon' ><IoIosNotifications /></button>
        <button className='header-icon' onClick={openChatSlide} ><IoIosChatbubbles /></button>
        
        <div className='user-avatar'>
          <CircularProfile imageUrl={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          <MdKeyboardArrowLeft onClick={toggleProfile} />
        </div>
      </div>
    </div>
  )
}

export default Header
