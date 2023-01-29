import React from 'react'

const ServiceCard = ({title}) => {
  return (
    <div className='ServiceCard'>
        <a className='font-color-black' href=''>
            <div className='img-frame'>
                <img alt='service-img' className='ServiceCard-img' style={{
                    width: '100%',
                    transition: 'transform .5s'
                }} src='./assets/imgs/services/hard-disk.jpg' />
            </div>
            <div className='flex flex-column padding-2-0'>

                <span className='chage-color-on-hover uppervase weight-600 font-medium'>{title}</span>

                <span className='chage-color-on-hover' style={{margin: '1rem 0'}}>Maecenas lacinia neque quis lacus ullamcorper posuere. Pellentesque at dui a purus elementum scelerisque a quis ante.</span>

                <a className='chage-color-on-hover black' href='#'>Learn More. . .</a>
            </div>
        </a>  
    </div>
  )
}

export default ServiceCard