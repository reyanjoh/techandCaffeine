import React from 'react'
import ServiceCard from '../../universalComponents/ServiceCard'

const FeaturedServices = () => {
  return (
    <div className='flex flex-column flex-align-center padding-2-6'>
        <span className='sections-headers'>Computer Repair and data recovery Services</span>
        <span className='sections-headers-sub-text'></span>

        <div className='flex' style={{columnGap: '2rem'}}>
            <ServiceCard title='data recovery' />
            <ServiceCard title='dive cloning' />
            <ServiceCard title='ssd upgrade' />
        </div>
    </div>
  )
}

export default FeaturedServices