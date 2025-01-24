import React from 'react';
import './Promo.css';

import carlotta from '../images/carlotta.jpeg';

function Promo() {
  return (
    <div>
        <img className='promo' src={carlotta} alt="Carlotta"></img>
    </div>
    );
};

export default Promo;