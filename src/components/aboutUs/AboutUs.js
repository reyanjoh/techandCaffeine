import React from 'react'
import ContactSection from '../universalComponents/ContactSection';
import PagesHero from '../universalComponents/PagesHero'
import ServiceCard from '../universalComponents/ServiceCard';
import YellowBracket from '../universalComponents/YellowBracket';

const AboutUs = () => {
    document.title = 'About | Tech&Caffeine';
  return (
    <div>
        <PagesHero />
        <div className='flex side-top-bottom-padding'>
            <div>
                <img src='./assets/imgs/about/image-2.jpg'/>
            </div>
            <div className='sections-content-paddings'>
                <h1 className='sections-headers sections-headers-blue'>Our Mission</h1>
                <p className='our-mission-content-paragraph'>
                    TECH&CAFFEINE offers you tech services anywhere, anytime and via the internet. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. 
                </p>
                <p className='our-mission-content-paragraph'>
                    We have served tens of computers in Malaybalay Bukidnon. We guarantee an outstanding experience. Customer's satisfaction is our ultimate goal. Our specialist techies will diagnose, recover your data and resolve your issues.
                </p>

                <ul>
                    <li className='our-mission-list'>
                        <span>Capitalize on low hanging fruit to identify</span>
                    </li>
                    <li className='our-mission-list'>
                        <span>Ballpark value added activity to beta test.</span>
                    </li>
                    <li className='our-mission-list'>
                        <span>Override the digital divide with additional clickthroughs</span>
                    </li>
                    <li className='our-mission-list'>
                        <span>From DevOps. Nanotechnology immersion along the information</span>
                    </li>
                    <li className='our-mission-list'>
                        <span>Highway will close the loop on focusing solely</span>
                    </li>
                </ul>
            </div>

        </div>
        <YellowBracket />
        <div className='what-we-offer-section flex flex-column flex-align-center'>
            <span className='what-we-offer-text sections-headers'>What We Offer</span>
            <span className='sections-headers-sub-text'>We've been there too, we understand the struggle and frustration of having a faulty computer, let us handle and fix your problems.</span>

            <div className=' what-we-offer-service side-top-bottom-padding flex'> 
                <ServiceCard title='data recovery' />
                <ServiceCard title='data recovery' />
                <ServiceCard title='dive cloning' />
            </div>
        </div>
        <div>
            <ContactSection />
        </div>
    </div>
  )
}

export default AboutUs