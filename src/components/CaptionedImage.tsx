// import React from 'react';
import './CaptionedImage.css'

import { useLanguage } from '../contexts/Language';

function CaptionedImage(props: { source: string; alt: string; className: string; enTitle: string; cnTitle: string; enDescription?: string; cnDescription?: string; }) {
  const { isEnglish } = useLanguage();

  return (
    <div className='captionedImage'>
      <img src={props.source} alt={props.alt} className={props.className} loading='lazy'/>

      <p className='title'>
        {isEnglish ? props.enTitle : props.cnTitle}
      </p>

      <p className='description'>
        {isEnglish ? props.enDescription : props.cnDescription}
      </p>
    </div>
  )
}

export default CaptionedImage;