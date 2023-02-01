import React from 'react'

const ServiceCard = ({imgLink, Name, Description}) => {
  return (
    <div className='ServiceCard'>
        <a className='font-color-black' href='/services'>
            <div className='img-frame'>
                <img alt='' className='ServiceCard-img' style={{
                    width: '100%',
                    transition: 'transform .5s'
                }} src={imgLink} />
            </div>
            <div className='flex flex-column padding-2-0'>

                <span className='chage-color-on-hover uppervase weight-600 font-medium'>{Name}</span>

                <span className='chage-color-on-hover' style={{margin: '1rem 0'}}>{Description}</span>

                <a className='chage-color-on-hover black' href='/services'>Learn More. . .</a>
            </div>
        </a>  
    </div>
  )
}

export default ServiceCard