// import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div>
      <img src='/footer_images/wechat.png' alt='WeChat Code' className='weChatCode'/>
      </div>
      <div className='contactInfo'>
        <img src='/footer_images/phone.png' alt='Phone Icon' className='contactIcon'/>
        <span> (718) 923-6087 </span>
          <br></br>
        <img src='/footer_images/fax.png' alt='Fax Icon' className='contactIcon'/>
        <span> (718) 923-6092 </span>
          <br></br>
        <img src='/footer_images/email.png' alt='Email Icon' className='contactIcon'/>
        <span> gracefulsofa@gmail.com </span>
      </div>
    </div>
  )
}

export default Contact;