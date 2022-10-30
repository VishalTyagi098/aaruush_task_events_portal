import React from 'react'
import monoact from '../images/monoact.webp'
import reroute from '../images/reroute.webp'
import roboleague from '../images/roboleague.webp'
import './Events.css'

function Events() {
  return (
    <div className='events-container'>
      <div className="events-title">Our Events</div>

      <div className="events-img">
        <div className="">
          <img src={monoact} alt="" height={400}/>
        </div>
        <div className="">
          <img src={reroute} alt="" height={400}/>
        </div>
        <div className="">
          <img src={roboleague} alt="" height={400}/>
        </div>
      </div>
      
    </div>
  )
}

export default Events