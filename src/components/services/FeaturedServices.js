import React from 'react'
import ServiceCard from './components/ServiceCard'

const FeaturedServices = () => {
  return (
    <div className='Services flex-column flex-align-center'>
        <span className='section-headers'>Services</span>
        <span className='section-sub-headers'>Services sub text</span>

        <div className='services-section'>
            <ServiceCard title='data recovery' />
            <ServiceCard title='dive cloning' />
            <ServiceCard title='ssd upgrade' />
        </div>
    </div>
  )
}

export default FeaturedServices