import React from 'react'

const HowItStarted = () => {
  return (
    <div className='flex flex-column flex-align-center bg-color-dark'>
        
        <div className='flex'>
            <img className='hide-on-mobile' alt='' src='./assets/imgs/aboutUs-img.jpg' style={{width: '50vw'}}/>

            <div className='flex flex-column padding-2-4 flex-justify-center'>
                <span className='sections-headers font-color-light'>how it started</span>

                <span className='sections-headers-sub-text font-color-light' style={{textAlign: 'left'}}>
                    It started as a DIY repair, becomes a hobby, friends and family are asking for help on repairing thier computers, untill I decided to buid a business out of it. TECH&CAFFEINE offers you tech services and anytime via the internet or personally. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. We have served tens of computers in Malaybalay Bukidnon. We guarantee an outstanding experience. Customer's satisfaction is our ultimate goaal. Our specialist techies will diagnose, recover your data and resolve your issues.
                </span>
                
                <a className='learn-more-about' href='/about'>Learn More</a>
                
            </div>
        </div>
    </div>
  )
}

export default HowItStarted