import React from 'react'
import AboutUs from '../aboutUs/AboutUs'
import FeaturedServices from '../services/FeaturedServices'
import Hero from './components/Hero'

const Home = () => {
  return (
    <>
    <div className='Home'>
        <Hero /> 
    </div>
    <FeaturedServices />
    <AboutUs />

    </>
    
  )
}

export default Home