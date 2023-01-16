import React from 'react'

const Header = () => {
  return (
    <header className='.flex-column'>
        <div className='header-contact-info flex flex-align-center'>
            <div className='header-contact-info-location flex-align-center'>
                <i className="fa-solid fa-location-dot header-icon"></i>
                <span className='header-contact-info-address'>Magsaysat Claro corner Malaybalay City</span>
            </div>

            <a href='tel:+(63)9761731273'>Call us for inquiry: +(63)9761731273</a>
        </div>

        <nav className='flex'>
            <div className='logo-div flex-align-center'>
                <img className='logo' src='./assets/imgs/logo.png'/>
                <span className='store-name'>TECH&CAFFEINE</span>
            </div>
            <div className='nav-div'>
                <a href='/'>Home</a>
                <a href='#'>About Us</a>
                <a href='/services'>Services</a>
                <a href='#'>Testimonials</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact Us</a>
            </div>
        </nav>
        
    </header>
  )
}

export default Header