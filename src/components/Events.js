import React from 'react'
import monoact from '../images/monoact.webp'
import './Events.css'

function Events() {
  return (
    <div className='events-container'>
      <div className="">
        <img src={monoact} alt="" height={300}/>
      </div>
      <div className="">
        <img src={monoact} alt="" height={300}/>
      </div>
      <div className="">
        <img src={monoact} alt="" height={300}/>
      </div>
    </div>
  )
}

export default Events