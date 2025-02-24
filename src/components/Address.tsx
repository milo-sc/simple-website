// import React from 'react';
import './Address.css';

function Address() {
  return (
    <div className='address'>
      <div className='addressIcon'>
        <img src='/footer_images/location.png' alt='Address Icon' className='addressIcon'/>
      </div>
      <div className='addressInfo'>
        <span> 228 40th Street </span> 
          <br></br>
        <span> Brooklyn, NY 11232 </span>
      </div>
    </div>
  )
}

export default Address;