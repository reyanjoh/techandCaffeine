import React from 'react'
import { ContactForm } from '../universalComponents/Forms';
import PagesHero from '../universalComponents/PagesHero'

const Contact = () => {

    document.title = 'Contact | Tech&Caffeine';

    const meta = document.createElement('meta'); 
    meta.setAttribute('name', 'keywords'); 
    meta.content="Tech&Caffeineffwfwfwfwfwfwefwefewffefwef";

    // const list = document.querySelector('head');
    // list.removeChild(list.);

    document.querySelector('head').append(meta)

  return (
    <div>
        <PagesHero />
        <div className='side-top-bottom-padding flex flex-justify-center'>
          <img alt='man' className='man-contacts' src='./assets/imgs/man-img.png'/>
          <ContactForm />
        </div>
        
        <div id='contact-form'>
          <iframe className='side-top-bottom-padding map' title='map og meff' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1396.330112151164!2d125.12499414328445!3d8.16057603850017!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1674410592128!5m2!1sen!2sph" height="450" style={{border:'0', backgroundColor: 'var(--main-color)'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        
    </div>
  )
}

export default Contact