import React from 'react'

export const PagesForm = () => {
  return (
    <form className='form' action='' method='post' >

      <div className='polygon-header flex flex-column flex-align-center'>
        <span className='polygon-header-text'>Facing Any Problem With Computer / Laptop?</span>
        <span className='polygon-header-subtext'>Get a Free Consultation</span>
      </div>

      <div className='inner-padding flex flex-column'>
        <div className='flex PagesForm-info'>
          <input className='PagesForm-input' required placeholder='First Name' name='First Name' type={'text'} />
          <input className='PagesForm-input' required placeholder='Last Name' name='Last Name' type={'text'} />
        </div>
        <div className='flex PagesForm-info'>
          <input className='PagesForm-input' required placeholder='Phone Number' name='Phone Number' type={'number'} />
          <input className='PagesForm-input' required placeholder='Email' name='email' type={'email'} />
        </div>

        <select required placeholder='Product' className='PagesForm-input' name="Product">
          <option value="">Choose Your Product</option>
          <option value="Laptop">Laptop</option>
          <option value="Desktop">Desktop</option>
        </select>

        <textarea className='PagesForm-textarea inner-padding' placeholder='Message'></textarea>
        <input className='PagesForm-submit PagesForm-input' type= {'submit'} value= {'GET A QUOTE'} />

      </div>

      
    </form>
  )
}


export const ContactForm = () => {
  return (
    <form action='' method='post' className='flex flex-column'>

      <textarea></textarea>
      <input type= {'submit'} value= {'submit'} />

    </form>
  )
}
