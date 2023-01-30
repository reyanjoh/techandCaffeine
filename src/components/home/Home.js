import React from 'react'
import NewTitle from '../../util/NewTitle'
import HowItStarted from '../aboutUs/components/HowItStarted'
import FeaturedServices from '../services/components/FeaturedServices'
import ContactSection from '../universalComponents/ContactSection'
import HomePageHero from './components/HomePageHero'

const Home = () => {
  NewTitle('Home');

  
  
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