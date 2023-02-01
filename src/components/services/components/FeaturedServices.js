import React, { useEffect, useState } from 'react'
import ThreeLoadingScreens from '../../loadingScreen/ThreeLoadingScreens'
import ServiceCard from '../../universalComponents/ServiceCard'

const FeaturedServices = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
      // const data = fetchData('http://localhost:3500/data')
      // console.log(data);

      // http://localhost:1337/api/home-page-featured-services/?populate=*

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
    <div className='flex flex-column flex-align-center padding-2-6'>
        <span className='sections-headers'>Computer Repair and data recovery Services</span>
        <span className='sections-headers-sub-text'></span>

        <div className='grid grid-3-columns' style={{columnGap: '2rem'}}>

            {isLoading && <ThreeLoadingScreens/>}
            {data && data.map((service)=>{
              // console.log(service);
                return(
                  <ServiceCard key={service.id} imgLink={service.attributes.coverUrl} Name={service.attributes.Name} Description={service.attributes.Description}/>
                )
            })}

        </div>
    </div>
  )
}

export default FeaturedServices