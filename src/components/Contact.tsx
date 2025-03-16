// import React from 'react';
import './Contact.css';

// import { useLanguage } from "../contexts/Language";

function Contact() {
  // const { isEnglish } = useLanguage();

  return (
    <div className='contact'>
      {/* Address */}
      <div className='address'>
        <img src='/footer_images/location.gif' alt='Address Icon' className='icon'/>
        <div className='info'>
          <a href='https://maps.app.goo.gl/aAzuem478RvNx9YHA'> 228 40th Street </a> 
            <br></br>
          <a href='https://maps.app.goo.gl/aAzuem478RvNx9YHA'> Brooklyn, NY 11232 </a>
        </div>
      </div>

      {/* Email */}
      <div className='container'>
        {/* <span> {isEnglish ? 'Please contact us at:' : '请联系我们'} </span> */}
          {/* <br></br> */}
        <img src='/footer_images/email.gif' alt='Email Icon' className='icon'/>
        <span> gracefulsofa@gmail.com </span>
      </div>
      
      {/* Phone */}
      <div className='container'>
        <img src='/footer_images/phone.gif' alt='Phone Icon' className='icon'/>
        <a href='tel:+17189236087' className='phoneNumber'> (718) 923-6087 </a>
      </div>
      
      {/* Fax */}
      <div className='container'>
        <img src='/footer_images/fax.png' alt='Fax Icon' className='icon'/>
        <span> (718) 923-6092 </span>
      </div>

    </div>
  )
}

export default Contact;