// import React from 'react';
import './Contact.css';

import PhoneIcon from '../images/telephone.png';
import FaxIcon from '../images/fax.png'

function Contact() {
  return (
    <div className='contact'>
      <div className='contactInfo'>
        <img src={PhoneIcon} alt='Phone Icon' className='contactIcon'/>
        <span> (718) 923-6087 </span>
          <br></br>
        <img src={FaxIcon} alt='Fax Icon' className='contactIcon'/>
        <span> (718) 923-6092 </span>
      </div>

      {/* <div>
        <div className='contactIcon'> 
          <img src={PhoneIcon} alt='Phone Icon' className='contactIcon'/>
        </div>
        <div className='contactIcon'> 
          <img src={FaxIcon} alt='Fax Icon' className='contactIcon'/>
        </div>
      </div>
      <div className='contactInfo'>
        <span>TEL: (718) 923-6087</span>
          <br></br>
        <span>FAX: (718) 923-6092</span>
      </div> */}
    </div> 
  )
}

export default Contact;