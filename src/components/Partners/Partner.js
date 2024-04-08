import React from 'react'
import './Partner.css'
import google from '../../assets/partners/google.png'
import amazon from '../../assets/partners/amazon.png'
import spotify from '../../assets/partners/spotify.png'
import linkedin from '../../assets/partners/linkedin.png'
import slack from '../../assets/partners/slack.png'
import walmart from '../../assets/partners/walmart.png'

export default function Partner() {
  return (
    <div id='partner'>
        <div className='p-5 trusted'>
            <span className='trusted'>200+</span> Trusted Partners
        </div>
        <div className='d-flex row' style={{margin:"20px 90px 90px 90px"}}>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={google} alt="" /></div>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={amazon} alt="" /></div>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={spotify} alt="" /></div>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={slack} alt="" /></div>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={linkedin} alt="" /></div>
            <div className='d-flex col-12 col-md-4 col-xl-2 p-3'><img src={walmart} alt="" /></div>

        </div>
      
      
    </div>
  )
}
