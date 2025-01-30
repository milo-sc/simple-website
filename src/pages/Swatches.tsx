// import React from 'react';
import './Swatches.css';

import color from '../images/color.jpg';

function Swatches() {
  return (
    <div>
        <img className='swatches' src={color} alt='colors'></img>
    </div>
    );
};

export default Swatches;