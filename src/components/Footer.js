import React from 'react'
import footer from '../images/footer.png'
import instagram from '../images/Instagram.png'
import mail from '../images/Mail.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>

      <div className="footer-img">
        <a href="https://aaruush.org/"><img src={footer} alt="" height={100}/></a>
        
      </div>

      <div className="footer-social">

        <div className="">
          <img src={instagram} alt="" height={40}/>
          <a href="https://www.instagram.com/aaruush_srm/">aaruush_srm</a>
          
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