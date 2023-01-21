import React from 'react'
import ServiceCard from '../../universalComponents/ServiceCard'

const FeaturedServices = () => {
  return (
    <div className='flex-column flex-align-center' style={{
      padding: '2rem 6rem'
    }}>
        <span className='sections-headers'>Computer Repair and data recovery Services</span>
        <span className='sections-headers-sub-text'></span>

        <div style={{
          display: 'flex',
          columnGap: '2rem'
        }}>
            <ServiceCard title='data recovery' />
            <ServiceCard title='dive cloning' />
            <ServiceCard title='ssd upgrade' />
        </div>
    </div>
  )
}

export default FeaturedServices