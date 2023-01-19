import React from 'react'

const HomePageHero = () => {
  return (
    <>
        <div className='hero flex-align-center'>
            <div className='welcome-msg'>
                <span className='looking-for'>Looking for</span>
                <h1 style={{
                    fontSize: 'var(--xlarge)',
                    color: 'var(--light-text)'
                }}>Computer / Laptop Repair</h1>
                <h2 style={{
                    fontSize: 'var(--medium)',
                    fontWeight: '500',
                    color: 'var(--light-text)',
                    margin: '0 0 3rem '
                }}>Our techies will diagnose your computer errors and troubleshoot it and restore your PC to its original state. Call us now to get instant tech support.</h2>

                <a className='call-us-now' href='tel:+(63)9761731273' style={{
                    border: '1px solid var(--ligh-yellow-color)',
                    padding: '.8rem 3rem'
                }}>Call us now!</a>
                <img alt='man' className='man-img' src='./assets/imgs/man-img.png'/>
            </div>
        </div>
        <div className='promises' style={{
            padding: '2rem 6rem',
            backgroundColor: 'var(--ligh-yellow-color)'
        }}>
            <div className='flex flex-align-center'>
                
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

export default HomePageHero