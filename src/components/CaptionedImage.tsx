// import React from 'react';
import './CaptionedImage.css'

import { useLanguage } from '../contexts/Language';

function CaptionedImage(props: { source: string; alt: string; className: string; enTitle: string; cnTitle: string; enDescription: string; cnDescription: string; }) {
  const { isEnglish } = useLanguage();

  return (
    <div className='captionedImageStyle'>
      <img src={props.source} alt={props.alt} className={props.className}/>

      <pre className='captionedImageTitle'>
        {isEnglish ? props.enTitle : props.cnTitle}
      </pre>

      <pre className='captionedImageDescription'>
        {isEnglish ? props.enDescription : props.cnDescription}
      </pre>
    </div>
  )
}

export default CaptionedImage;