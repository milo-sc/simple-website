// import React from 'react';
import './Blurb.css'

import { useLanguage } from '../contexts/Language';

function Blurb(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

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
        style={{color: props.isHovered ? 'black' : 'white'}}
      >
        {isEnglish ? enBlurb : cnBlurb}
      </p>
    </div>
  )
}

export default Blurb;