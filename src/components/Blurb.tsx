// import React from 'react';
import './Blurb.css'

import { useLanguage } from '../contexts/Language';

function Blurb(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  const enBlurb = `
    Timeless furniture made in America
  `;
  const cnBlurb = `
    美国永恒的家具马
  `;

  return (
    <div>
      <p 
        className='blurb'
        // style={{color: props.isHovered ? 'black' : 'white'}}
      >
        {isEnglish ? enBlurb : cnBlurb}
      </p>
    </div>
  )
}

export default Blurb;