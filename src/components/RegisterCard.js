import React from 'react'
import './RegisterCard.css'
import monoact from '../images/monoact.webp'


function RegisterCard() {
  return (
    <div className='register-card-container'>
      <div className="img-container">
        <img src={monoact} alt="" height={500}/>
      </div>

      <div className="text-container">
        <div className="text-title">Monoact</div>
        <div className="text-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus assumenda doloribus quas itaque, cupiditate tempora asperiores quibusdam blanditiis voluptatum nam aliquam iusto. Et, perferendis! Doloremque.</div>
        <div className="text-fees">included with CR</div>
        <div className="text-btn">
          <button className='register-btn'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterCard