import React from 'react';
import './Promo.css';

import color from '../images/color.jpg';

function Promo() {
  return (
    <div>
        <img className='promo' src={color}></img>
    </div>
    );
};

export default Promo;