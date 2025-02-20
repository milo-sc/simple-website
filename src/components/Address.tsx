// import React from 'react';
import './Address.css';

import LocationIcon from '../images/location.png';

function Address() {
  return (
    <div className='address'>
      <div className='addressIcon'>
        <img src={LocationIcon} alt='Address Icon' className='addressIcon'/>
      </div>
      <div className='addressInfo'>
        <span> 228 40th Street </span> 
          <br></br>
        <span> Brooklyn, NY 11232 </span>
      </div>
    </div>
   
    // add attribution to picture, 
  )
}

export default Address;