import React from 'react'
import Logo from './components/Logo'

const Header = () => {
  return (
    <header className='flex-column'>
        <div className='header-contact-info flex flex-align-center'>
            <div className='header-contact-info-location flex flex-align-center'>
                <i className="fa-solid fa-location-dot header-icon"></i>
                <span className='header-contact-info-address'>Claro Corner, Magsaysay St, Malaybalay City, 8700 Bukidnon</span>
            </div>

            <a href='tel:+(63)9761731273'>Call us for inquiry: +(63)9761731273</a>
        </div>

        <nav className='flex'>
            <a href='/'><Logo /></a>
            <div className='nav-div'>
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/services'>Services</a>
                <a href='#'>Testimonials</a>
                <a href='#'>Blog</a>
                <a href='/contact'>Contact Us</a>
            </div>
        </nav>
        
    </header>
  )
}

export default Header