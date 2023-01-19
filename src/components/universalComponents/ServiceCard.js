import React from 'react'

const ServiceCard = ({title}) => {
  return (
    <div className='ServiceCard' style={{
        width: '100%',
        border: '1px solid var(--border-color)',
        transition: '.3s'
    }}>
        <div style={{
            aspectRatio: '4 / 2',
            overflow: 'hidden'
        }}>
            <img alt='service-img' className='ServiceCard-img' style={{
                width: '100%',
                transition: 'transform .5s'
            }} src='./assets/imgs/services/hard-disk.jpg' />
        </div>
        <div className='flex-column flex-align-center' style={{padding: '2rem'}}>

            <span className='chage-color-on-hover' style={{
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: 'var(--medium)'
            }}>{title}</span>

            <span className='chage-color-on-hover' style={{
                margin: '1rem 0'
            }}>Maecenas lacinia neque quis lacus ullamcorper posuere. Pellentesque at dui a purus elementum scelerisque a quis ante.</span>

            <a className='chage-color-on-hover black' style={{
                border: '1px solid var(--border-color)',
                padding: '.5rem 2.5rem'
            }} href='#'>Learn More</a>
        </div>
    </div>
  )
}

export default ServiceCard