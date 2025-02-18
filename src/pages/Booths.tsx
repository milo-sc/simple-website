// import React from 'react';
import './Booths.css';

import CaptionedImage from '../components/CaptionedImage';

import TestImage from '../images/color.jpg';

function Booths() {
  return (
    <div className='booths'>
      <CaptionedImage    
        source={TestImage}
        alt="test image"
        className="squareImage"
        enTitle="enString"
        cnTitle="cnString"
      />

      <CaptionedImage    
        source={TestImage}
        alt="test image"
        className="squareImage"
        enTitle="enString"
        cnTitle="cnString"
      />

      <CaptionedImage    
        source={TestImage}
        alt="test image"
        className="squareImage"
        enTitle="enString"
        cnTitle="cnString"
      />

      <CaptionedImage    
        source={TestImage}
        alt="test image"
        className="squareImage"
        enTitle="enString"
        cnTitle="cnString"
      />
    </div>
  )
}

export default Booths;