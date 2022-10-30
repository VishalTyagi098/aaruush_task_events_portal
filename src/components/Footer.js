import React from 'react'
import footer from '../images/footer.png'
import instagram from '../images/Instagram.png'
import mail from '../images/Mail.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>

      <div className="footer-img">
        <img src={footer} alt="" height={100}/>
      </div>

      <div className="footer-social">

        <div className="">
          <img src={instagram} alt="" height={40}/>
          aaruush_srm
        </div>

        <div className="">
          <img src={mail} alt="" height={40}/>
          csiorg@aaruush.net
        </div>
      </div>
    </div>
  )
}

export default Footer