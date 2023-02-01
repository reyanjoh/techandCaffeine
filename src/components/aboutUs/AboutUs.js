import React, { useState, useEffect } from 'react'
import ThreeLoadingScreens from '../loadingScreen/ThreeLoadingScreens';
import ContactSection from '../universalComponents/ContactSection';
import PagesHero from '../universalComponents/PagesHero'
import ServiceCard from '../universalComponents/ServiceCard';

const AboutUs = () => {
    document.title = 'About | Tech&Caffeine';




    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
      // const data = fetchData('http://localhost:3500/data')
      // console.log(data);

      const getData = async() =>{
        const res = await fetch('https://techandcaffeineheadlesscms.onrender.com/api/home-page-featured-services/?populate=*')
        const data = await res.json()

        setData(data.data[0].attributes.services.data);
        setLoading(false);
        // console.log(data);
      }   
      getData()
      

    },[])

  return (
    <div>
        <PagesHero />
        <div className='flex side-top-bottom-padding bg-color-dark'>
            <div>
                <img alt='' src='./assets/imgs/about/image-2.jpg'/>
            </div>
            <div className='sections-content-paddings'>
                <h1 className='sections-headers font-color-light'>Our Mission</h1>
                <p className='our-mission-content-paragraph font-color-light'>
                    TECH&CAFFEINE offers you tech services anywhere, anytime and via the internet. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. 
                </p>
                <p className='our-mission-content-paragraph font-color-light'>
                    We have served tens of computers in Malaybalay Bukidnon. We guarantee an outstanding experience. Customer's satisfaction is our ultimate goal. Our specialist techies will diagnose, recover your data and resolve your issues.
                </p>

                <ul>
                    <li className='our-mission-list font-color-light'>
                        <span>Capitalize on low hanging fruit to identify</span>
                    </li>
                    <li className='our-mission-list font-color-light'>
                        <span>Ballpark value added activity to beta test.</span>
                    </li>
                    <li className='our-mission-list font-color-light'>
                        <span>Override the digital divide with additional clickthroughs</span>
                    </li>
                    <li className='our-mission-list font-color-light'>
                        <span>From DevOps. Nanotechnology immersion along the information</span>
                    </li>
                    <li className='our-mission-list font-color-light'>
                        <span>Highway will close the loop on focusing solely</span>
                    </li>
                </ul>
            </div>

        </div>
        <div className='flex flex-column flex-align-center padding-2-6'>
            <span className='sections-headers'>What We Offer</span>
            <span className='sections-headers-sub-text'>We've been there too, we understand the struggle and frustration of having a faulty computer, let us handle and fix your problems.</span>

            <div className='grid grid-3-columns' style={{columnGap: '2rem'}}>

            {isLoading && <ThreeLoadingScreens/>}
            {data && data.map((service)=>{
              console.log(service);
                return(
                  <ServiceCard key={service.id} imgLink={service.attributes.coverUrl} Name={service.attributes.Name} Description={service.attributes.Description}/>
                )
            })}

        </div>
        </div>
        <div>
            <ContactSection />
        </div>
    </div>
  )
}

export default AboutUs