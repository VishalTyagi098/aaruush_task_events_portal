import React from 'react'
import RegisterCard from './RegisterCard'
import './Register.css'

function Register() {
  return (
    <div className='register-container'>
      <div className="register-title">
        Register
      </div>
      <div className="register-cards">
        <RegisterCard/>
        <RegisterCard/>
        <RegisterCard/>
      </div>
      
    </div>
  )
}

export default Register