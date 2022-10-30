import React from 'react'
import './Navbar.css'
import aaruushLogo from '../images/aaruushLogo.png'

function Navbar() {
  return (
    <div className='nav-container'>

      <div className="nav-title">
        <img src={aaruushLogo} alt="" />
        <div className="nav-title-text">Event Management '22</div>
      </div>

      <div className="nav-links">
        <div>Events</div>
        <button>Register</button>
      </div>

    </div>
  )
}

export default Navbar