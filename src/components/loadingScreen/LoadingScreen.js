import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='LoadingScreen'>
        <a className='font-color-black' href='/services'>
            <div className='img-frame'>
                <div className='LoadingScreen-skeleton LoadingScreen-img'>   
                </div>
            </div>
            <div className='flex flex-column padding-2-0'>
                <div className='LoadingScreen-skeleton LoadingScreen-group LoadingScreen-Header'></div>

                <div className='LoadingScreen-skeleton LoadingScreen-group' style={{margin: '1.5rem 0 0'}}></div>
                <div className='LoadingScreen-skeleton LoadingScreen-group' style={{margin: '.5rem 0 0'}}></div>
                <div className='LoadingScreen-skeleton LoadingScreen-group' style={{margin: '.5rem 0 0'}}></div>
                <div className='LoadingScreen-skeleton LoadingScreen-group' style={{margin: '.5rem 0 1.5rem', width:'90%'}}></div>

                <div className='LoadingScreen-skeleton LoadingScreen-group LoadingScreen-link' href='/services'></div>
            </div>
        </a>  
    </div>
  )
}

export default LoadingScreen