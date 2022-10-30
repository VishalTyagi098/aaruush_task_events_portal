import React from 'react'
import './Navbar.css'
import aaruushLogo from '../images/aaruushLogo.png'

function Navbar() {
  return (
    <div className='nav-container'>

      <div className="nav-title">
        <img src={aaruushLogo} alt="" />
        <div className="nav-title-text"><a href="https://aaruush.org/">Event Management '22</a> </div>
      </div>

      <div className="nav-links">
        <div>Events</div>
        <button className='nav-btn'>Register</button>
      </div>

    </div>
  )
}

export default Navbar