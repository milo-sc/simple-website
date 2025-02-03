// import React from 'react';
import './Blurb.css'

import { ChildProps } from '../types';
import { useLanguage } from '../contexts/Language';

function Blurb(props: ChildProps) {
  const { isEnglish } = useLanguage();
  const { isHovered } = props;

  const enBlurb = `
    blurb blurb blurb
  `;
  const cnBlurb = `
    brulb brulb brulb
  `;

  return (
    <div>
      <p 
        className='blurb'
        style={{color: isHovered ? 'black' : 'white'}}
      >
        {isEnglish ? enBlurb : cnBlurb}
      </p>
    </div>
  )
}

export default Blurb;