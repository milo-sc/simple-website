// import React from 'react';
import './Contact.css';

import PhoneIcon from '../images/telephone.png';
import FaxIcon from '../images/fax.png';
import WeChatCode from '../images/qr_code.png';
import EmailIcon from '../images/mail.png';

function Contact() {
  return (
    <div className='contact'>
      <div>
      <img src={WeChatCode} alt='WeChat Code' className='weChatCode'/>
      </div>
      <div className='contactInfo'>
        <img src={PhoneIcon} alt='Phone Icon' className='contactIcon'/>
        <span> (718) 923-6087 </span>
          <br></br>
        <img src={FaxIcon} alt='Fax Icon' className='contactIcon'/>
        <span> (718) 923-6092 </span>
          <br></br>
        <img src={EmailIcon} alt='Email Icon' className='contactIcon'/>
        <span> gracefulsofa@gmail.com </span>
      </div>
    </div>
  )
}

export default Contact;