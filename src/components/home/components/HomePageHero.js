import React from 'react'

const HomePageHero = () => {
  return (
    <>
        <div className='hero flex-align-center font-color-light'>
            <div className='welcome-msg'>
                <span className='looking-for'>Looking for</span>
                <h1 className='font-xxlarge'>Computer and Laptop Repair in Malaybalay ?</h1>
                <h2 className='font-medium weight-500 bottom-m-3rem'>Our techies will diagnose your computer errors and troubleshoot it and restore your PC to its original state. Call us now to get instant tech support.</h2>

                <a className='call-us-now' href='tel:+(63)9761731273'>Call us now!</a>
                <img alt='man' className='man-img' src='./assets/imgs/man-img.png'/>
            </div>
        </div>
        <div className='promises font-color-light bg-color-yellow padding-2-6'>
            <div className='flex flex-align-center'>
                
            <i className='fa-regular fa-square-check ' style={{fontSize: '3rem', margin: 0}}></i>
                <span className='no-risk weight-600'>NO RISK</span>

                <span className='money-back'>30 DAY MONEY BACK GAURANTEE</span>
            </div>
        </div>
    </>
  )
}

export default HomePageHero