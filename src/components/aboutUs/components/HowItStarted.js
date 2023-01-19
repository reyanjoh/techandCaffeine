import React from 'react'

const HowItStarted = () => {
  return (
    <div className='flex-column flex-align-center' style={{backgroundColor: '#124375'}}>
        
        {/* <span className='sections-headers' style={{
            margin:'2rem 0 4rem',
            color: 'var(--light-text)'
        }}>ABOUT US</span> */}
        {/* <span className='sections-headers-sub-text' style={{
            margin:'0 6rem 4rem'
        }}>It started as a DIY repair, becomes a hobby, friends and family are asking for help on repairing thier computers, untill I decided to buid a business out of it. TECH&CAFFEINE offers you tech services and anytime via the internet or personally. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. We have served tens of computers in Malaybalay Bukidnon. We guarantee an outstanding experience. Customer's satisfaction is our ultimate goaal. Our specialist techies will diagnose, recover your data and resolve your issues.</span> */}

        <div className='flex' style={{
                width: '100vw'
            }}>
            <img src='./assets/imgs/aboutUs-img.jpg' style={{
                width: '50vw'
            }}/>


            <div className='flex-column' style={{padding:'2rem 4rem',}}>
                <span className='sections-headers' style={{
                    color: 'var(--light-text)'
                }}>how it started</span>

                <span className='sections-headers-sub-text' style={{
                    textAlign: 'left',
                    color: 'var(--light-text)'
                }}>It started as a DIY repair, becomes a hobby, friends and family are asking for help on repairing thier computers, untill I decided to buid a business out of it. TECH&CAFFEINE offers you tech services and anytime via the internet or personally. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. We have served tens of computers in Malaybalay Bukidnon. We guarantee an outstanding experience. Customer's satisfaction is our ultimate goaal. Our specialist techies will diagnose, recover your data and resolve your issues.</span>

                <a className='learn-more-about' href='/about'>Learn More</a>
                
            </div>
        </div>
    </div>
  )
}

export default HowItStarted