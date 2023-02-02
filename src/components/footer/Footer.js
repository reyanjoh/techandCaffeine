import React from 'react'
import Logo from '../header/components/Logo'

const Footer = () => {
  return (
    <div className='bg-color-light'>
        <div className='flex flex-justify-center' style={{padding: '2rem 0'}}>
            <i className="footer-icon fa-brands fa-facebook"></i>

            

            <a href='/contact#contact-form'><i className="footer-icon fa-solid fa-map-location-dot"></i></a>
            
        </div>
        <div className='flex mobile-flex-column padding-0-6 font-color-light' style={{columnGap:'1rem', paddingBottom:'2rem'}}>
            <div  className='footer-card flex-column font-color-light'>
                <span className='footer-header'>
                    <a href='/'><Logo /></a>
                </span>
                    
                <span>
                    OUR NEWSLETTER
                </span>
                <form action='https://getform.io/f/fe695567-3adb-4924-8d2b-39a784538501' method="POST">
                    <input required placeholder='Your email address' name='news-letter-subscription-email' type={'email'} style={{
                        width: '90%',
                        height: '2rem',
                        margin: '.5rem 0',
                        padding: '0 0 0 1.5rem'
                    }}/>
                    <input className='footer-newsletter-submit' type={'submit'} value={'Subscribe'} style={{
                        width: '50%',
                        height: '2rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}/>
                </form>
            </div>
            <div  className='footer-card flex-column'> 
                {/* <span className='footer-header'>
                    ADDRESS
                </span> */}
            </div>
            <div  className='footer-card flex-column font-color-light'> 
                <span className='footer-header'>
                    ADDRESS
                </span>
                <div className='footer-contact header-contact-info-location flex-align-center'>
                    <i className="fa-solid fa-location-dot header-icon"></i>
                    <span>Claro Corner, Magsaysay St, Malaybalay City, 8700 Bukidnon</span>
                </div>
                <div className='footer-contact header-contact-info-location flex-align-center'>
                    <i class="fa-solid fa-phone"></i>
                    <a href='tel:+(63)9761731273'> +(63)9761731273</a>
                </div>
                
            </div>
            <div  className='footer-card flex flex-column font-color-light'> 
                <span className='footer-header'>
                    WORKING HOURS 
                </span>
                <span>
                Monday .......................... 9:00am - 4:00pm
                </span>
                <span>
                Tuesday .......................... 9:00am - 4:00pm
                </span>
                <span>
                Wednesday ................... 9:00am - 4:00pm
                </span>
                <span>
                Thursday ........................ 9:00am - 4:00pm
                </span>
                <span>
                Friday .............................. 9:00am - 4:00pm
                </span>
                <span>
                Saturday ........................ 9:00am - 4:00pm
                </span>
                <span>
                Sunday ........................... Closed
                </span>
            </div>

        </div>
        <div style={{
            padding: '2rem 6rem',
            display: 'flex',
            justifyContent:'space-between',
            color:'var(--light-text)',
            backgroundColor: '#124375'
            // borderTop: '1px solid var(--light-text)'
            }}>
            <span className='font-color-light'>© Copyright TECH&CAFFEINE 2023. All right reserved.</span>
            <span className='font-color-light'>Developed by: Reyan John Narvaja</span>
        </div>
    </div>
  )
}

export default Footer