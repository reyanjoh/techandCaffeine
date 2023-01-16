import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
        <div className='hero flex-align-center'>
            <div className='welcome-msg'>
                <span className='looking-for'>Looking for</span>
                <h1>Computer / Laptop Repair</h1>
                <h2>Our techies will diagnose your computer errors and troubleshoot it and restore your PC to its original state. Call us now to get instant tech support.</h2>

                <a className='call-us-now' href='tel:+(63)9761731273'>Call us now!</a>
                <img className='man-img' src='./assets/imgs/man-img.png'/>
            </div>
        </div>
        <div className='promises'>
            <div className='risk-free'>
            <i class="fa-regular fa-square-check"></i>
                <span className='no-risk'>NO RISK</span>
                <span className='money-back'>30 DAY MONEY BACK GAURANTEE</span>
            </div>
        </div>
        
    </div>
  )
}

export default Home