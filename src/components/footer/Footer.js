import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#1D5A90'}}>
        <div className='flex-justify-center' style={{padding: '3rem 0'}}>
            <i className="footer-icon fa-brands fa-facebook"></i>
            <i className="footer-icon fa-solid fa-map-location-dot"></i>
        </div>
        <div>
        </div>
        <div style={{
            padding: '2rem 5rem',
            display: 'flex',
            justifyContent:'space-between',
            color:'var(--light-text)',
            backgroundColor: '#124375'
            // borderTop: '1px solid var(--light-text)'
            }}>
            <span>© Copyright TECH&CAFFEINE 2023. All right reserved.</span>
            <span>Created by: Reyan John Narvaja</span>
        </div>
    </div>
  )
}

export default Footer