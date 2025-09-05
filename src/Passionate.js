import React from 'react'
import video from './media/Teamwork Presentation.mp4'
const Passionate = () => {
  return (
    <div className='passionate'>
    <video src={video} autoPlay muted loop></video>
    <div className="passionateBottom">
        <div className="passionateBottomLeft">
            <h1>We are passionate</h1>
        </div>
        <div className="passionateBottomRight">
            <p>Overcoming expectations is our mission. We’re here to follow your vision and extend it into one consistent product. You got all according to our agreement, and some more.</p><br />
            <p>The process based on a customer-centric approach. Nowadays brand communication should be something that people really want to be involved in. Understanding and vibing your audience is what we’re here for.</p> <br />
            <p>It may be not easy and time-consuming, but we don’t look for short ways. We’re lordly of our mission and it’s this attitude that defines us.</p>
        </div>
    </div>
    </div>
    
  )
}

export default Passionate
