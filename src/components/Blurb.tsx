// import React from 'react';
import './Blurb.css'

import { useLanguage } from '../contexts/Language';

function Blurb(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  const enBlurb = `
    Phone - (718) 923-6087
  `;
  const cnBlurb = `
    电话 - (718) 923-6087
  `;

  return (
    <div className='blurb'>
      <a href='tel:+17189236087' className='phoneNumber'> {isEnglish ? enBlurb : cnBlurb} </a>
    </div>
  )
}

export default Blurb;