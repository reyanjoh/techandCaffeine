import React from 'react'
import LoadingScreen from './LoadingScreen'

const ThreeLoadingScreens = () => {
  return (
    <div className='ThreeLoadingScreens grid grid-3-columns' style={{columnGap: '2rem'}}>
        <LoadingScreen />
        <LoadingScreen />
        <LoadingScreen />
    </div>
  )
}

export default ThreeLoadingScreens