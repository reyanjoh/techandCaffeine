import React from 'react'
import PagesHero from '../universalComponents/PagesHero'
import AllServices from './components/AllServices';

const Services = () => {

  document.title = 'Services | Tech&Caffeine';
  return (
    <div>
      <PagesHero />

      <AllServices />
    </div>
  )
}

export default Services