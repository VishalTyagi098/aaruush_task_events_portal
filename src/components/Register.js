import React from 'react'
import RegisterCard from './RegisterCard'
import './Register.css'

import monoact from '../images/monoact.webp'
import reroute from '../images/reroute.webp'
import roboleague from '../images/roboleague.webp'

function Register() {
  const registerCardData1 ={
    image:monoact,
    title:"MonoAct",
    desc: "To bring out the artist in you. A chance to be an entire crew. Actors! Directors! Filmmakers! we have all got you covered",
    fees:"Included with CR",
    link:"#",
  }
  const registerCardData2 ={
    image:reroute,
    title:"Reroute",
    desc: "Mirroring the human movements and incorporating them into the autonomous world, Team Aaruush presents to you, ‘Reroute- Line follower Challenge’ flagship of Domain Online. ",
    fees:"INR 150",
    link:"#",
  }
  const registerCardData3 ={
    image:roboleague,
    title:"Robo League",
    desc: "Experience the adrenaline and test the strength, stability, accuracy and speed of your robot",
    fees:"INR 250",
    link:"#",
  }
  return (
    <div className='register-container'>
      <div className="register-title">
        Register
      </div>
      <div className="register-cards">
        <RegisterCard {...registerCardData1}/>
        <RegisterCard {...registerCardData2}/>
        <RegisterCard {...registerCardData3}/>
      </div>
      
    </div>
  )
}

export default Register