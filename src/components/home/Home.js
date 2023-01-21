import React from 'react'
import HowItStarted from '../aboutUs/components/HowItStarted'
import FeaturedServices from '../services/components/FeaturedServices'
import ContactSection from '../universalComponents/ContactSection'
import HomePageHero from './components/HomePageHero'

const Home = () => {
  return (
    <>
    <div className='Home' style={{backgroundColor: '#124375'}}>
        <HomePageHero /> 
    </div>
    <FeaturedServices />
    <HowItStarted />
    <ContactSection />

    </>
    
  )
}

export default Home