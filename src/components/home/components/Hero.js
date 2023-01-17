import React from 'react'

const Hero = () => {
  return (
    <>
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
            <div style={{
                 display: 'flex',
                 alignItems: 'center'
            }}>
            <i class="fa-regular fa-square-check" style={{
                fontSize: '3rem',
                margin: 0,
                color: 'var(--light-text)'

            }}></i>
                <span style={{
                    borderRight: '2px solid #B37F4C',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: 'var(--light-text)'
                }}>NO RISK</span>

                <span style={{
                    width: '9rem',
                    lineHeight: '.7rem',
                    color: 'var(--light-text)'
                }}>30 DAY MONEY BACK GAURANTEE</span>
            </div>
        </div>
    </>
  )
}

export default Hero