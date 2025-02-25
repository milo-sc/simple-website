// import React from 'react';
import './LanguageSlider.css';

import { useLanguage } from "../contexts/Language";

function LanguageSlider() {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <div 
      className="languageToggleContainer"
      onClick={toggleLanguage}
    >
      <div className="languageLabels">
        <span className={isEnglish ? 'english' : ''}>EN</span>
        <span className={!isEnglish ? 'chinese' : ''}>中文</span>
      </div>

      <div className={`sliderTrack ${isEnglish ? 'english' : 'chinese'}`}>
        <div className="sliderThumb" />
      </div>

    </div>
  )
}

export default LanguageSlider;