import React from 'react'
import { PagesForm } from './Forms'

const ContactSection = () => {
  return (
    <div className='mobile-flex-column tablet-flex-column side-top-bottom-padding flex'>
      <div className='flex flex-column half-display-width padding-right'>
        <span className='contact-section-header'>Your Local Geeks Will email you back as soon as posible!</span>
        <span className='contact-section-sub-header'>We only give service in Malaybalay area for now</span>
        <p className='contact-section-p'>
          We specializes in a wide range of services, including tailored IT services and solutions for individuals and businesses in Malaybalay. We are committed to providing each and every one of our clients and customer with high quality service and support. Our IT specialists are incredibly friendly and will help you every step of the way with your business and computer needs. We combine our services in order to provide you with customized help and support so you get what you need. Our innovative approach starts with a thorough investigation of what your needs to succeed so that we can ensure a perfect fit with you and your business.
        </p>
        <p>Our Techs have the experience to get your computer back. We also can come to your Business or Home.</p>

        <span className='call-us-today'>Tap the Number to Call us Today! <a className='call-us-today-phone' href='tel:+(63)9761731273'>+(63)9761731273</a></span>
        
      </div>
      <PagesForm />
    </div>
  )
}

export default ContactSection