import React from 'react'
import HowItStarted from '../aboutUs/components/HowItStarted'
import Prices from '../prices/Prices'
import FeaturedServices from '../services/FeaturedServices'
import HomePageHero from './components/HomePageHero'

const Home = () => {
  return (
    <>
    <div className='Home' style={{backgroundColor: '#124375'}}>
        <HomePageHero /> 
    </div>
    <FeaturedServices />
    <HowItStarted />
    
    {/* <Prices /> */}

    </>
    
  )
}

export default Home