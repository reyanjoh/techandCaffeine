import React from 'react'
import ServiceCard from '../../universalComponents/ServiceCard'

const AllServices = () => {
  return (
    <div className=' AllServices side-top-bottom-padding flex-column flex-align-center'>
        <span className='sections-headers'>What We do</span>
        <span className='our-mission-content-paragraph ' style={{textAlign: 'center'}}>
        TECH&CAFFEINE offers you tech services anywhere, anytime and even   via the internet. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. We guarantee an outstanding experience.
        </span>


        <div className='AllServices-services-section'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default AllServices