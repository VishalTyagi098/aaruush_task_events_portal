import React from 'react'
import './RegisterCard.css'


function RegisterCard(props) {
  return (
    <div className='register-card-container'>
      <div className="img-container">
        <img src={props.image} alt="" height={500}/>
      </div>

      <div className="text-container">
        <div className="text-title">{props.title}</div>
        <div className="text-para">{props.desc}</div>
        <div className="text-fees">{props.fees}</div>
        <div className="text-btn">
          <button className='register-btn'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterCard