import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className=' paddings innerWidth flexCenter header-container'>
      <img src='./logo.png' alt="logo"/>
      <div className='flexCenter nav'>
       <a href="#">Residencies</a>
       <a href="#">Our Values</a>
       <a href="#">Contact Us</a>
       <a href="#">Get Started</a>
       <button className='button'>
       <a href="#">Contact</a>
       </button>
      </div>

    

    </div>
  )
}

export default Header