// import React from 'react';
import './LanguageSlider.css';

import { useLanguage } from "../contexts/Language";

function LanguageSlider() {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <div 
      className="languageToggleContainer"
      onClick={toggleLanguage}
      role="switch"
      aria-checked={isEnglish}
      aria-label="Toggle Language"
    >
      <div className={`sliderTrack ${isEnglish ? 'english' : 'chinese'}`}>
        <div className="sliderThumb" />
      </div>
      <div className="languageLabels">
        <span className={isEnglish ? 'active' : ''}>EN</span>
        <span className={!isEnglish ? 'active' : ''}>CN</span>
      </div>
    </div>
  );
}

export default LanguageSlider;