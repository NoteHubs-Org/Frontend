import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./header.css"
import CircularProfile from './HeaderProfile';
import { IoMdSearch } from "react-icons/io";

const Header = ({ toggleProfile }) => {
  return (
    <div className='header'>
      <h2 className='logo-name'>NoteHub</h2>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search for courses, books, or documents..." />
        <IoMdSearch className='header-icon' />
      </div>
      <div className='header-right'>
        <IoIosNotifications className='header-icon' />
        <IoIosChatbubbles className='header-icon' />
        <div className='div-profile'>
          <CircularProfile imageUrl={'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
          <MdKeyboardArrowLeft onClick={toggleProfile} />
        </div>
      </div>
    </div>
  )
}

export default Header
