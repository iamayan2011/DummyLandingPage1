import React from 'react'
import './Marquee.css'
import marqimg from './marquee.png'

export default function Marquee() {
  return (
    <div className='parentmarquee'>
        <div className='marqueediv d-flex align-items-center'>
            <marquee>
            <div className='d-flex align-items-center'>
                <span className='marqtxt'>DIGITAL</span>
                <img src={marqimg} alt="" />
                <span className='marqtxt'>JYHTU</span>
                <img src={marqimg} alt="" />
                <span className='marqtxt'>CREATIVE</span>
                <img src={marqimg} alt="" />

            </div>
            </marquee>
        </div>
      
    </div>
  )
}
