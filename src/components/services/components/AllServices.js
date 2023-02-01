import React, {useState, useEffect} from 'react'
import ThreeLoadingScreens from '../../loadingScreen/ThreeLoadingScreens'
import ServiceCard from '../../universalComponents/ServiceCard'

const AllServices = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    // const data = fetchData('http://localhost:3500/data')
    // console.log(data);

    const getData = async() =>{
      const res = await fetch('https://techandcaffeineheadlesscms.onrender.com/api/services')
      const data = await res.json()

      setData(data);
      setLoading(false);
      // console.log(data);
    }   
    getData()
    

  },[])


  return (
    <div className='side-top-bottom-padding flex flex-column flex-align-center'>
        <span className='sections-headers'>What We do</span>
        <span className='our-mission-content-paragraph ' style={{textAlign: 'center'}}>
        TECH&CAFFEINE offers you tech services anywhere, anytime and even   via the internet. Our techies are reliable, attentive and patient. We offer you reliable secure remote tech assistance. We guarantee an outstanding experience.
        </span>


        <div className='grid grid-3-columns' style={{columnGap: '2rem', marginTop: '3rem'}}>
            {isLoading && <ThreeLoadingScreens/>}
            {data && data.data.map((service)=>{
                return(
                  <ServiceCard key={service.id} imgLink={service.attributes.coverUrl} Name={service.attributes.Name} Description={service.attributes.Description}/>
                )
            })}
        </div>
    </div>
  )
}

export default AllServices