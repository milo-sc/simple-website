// import React from 'react';
import './Contact.css';

// import { useLanguage } from "../contexts/Language";

function Contact() {
  // const { isEnglish } = useLanguage();

  return (
    <div className='contact'>
      {/* Address */}
      <div className='contactLine'>
        <img src='/footer_images/location.gif' alt='Address Icon' className='addressIcon'/>
        <div>
          <span> 228 40th Street </span> 
            <br></br>
          <span> Brooklyn, NY 11232 </span>
        </div>
      </div>

      {/* Email */}
      <div className='contactLine'>
        {/* <span> {isEnglish ? 'Please contact us at:' : '请联系我们'} </span> */}
          {/* <br></br> */}
        <img src='/footer_images/email.gif' alt='Email Icon' className='contactIcon'/>
        <span> gracefulsofa@gmail.com </span>
      </div>
      
      {/* Phone */}
      <div className='contactLine'>
        <img src='/footer_images/phone.gif' alt='Phone Icon' className='contactIcon'/>
        <span> (718) 923-6087 </span>
      </div>
      
      {/* Fax */}
      <div className='contactLine'>
        <img src='/footer_images/phone.gif' alt='Fax Icon' className='contactIcon'/> {/* but actually fax */}
        <span> (718) 923-6092 </span>
      </div>

    </div>
  )
}

export default Contact;