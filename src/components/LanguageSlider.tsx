// import React from 'react';
import './LanguageSlider.css';

import { useLanguage } from "../contexts/Language";

function LanguageSlider() {
  const { isEnglish, toggleLanguage } = useLanguage();

  return (
    <div className="languageSlider" onClick={toggleLanguage}>
      <div className="labels">
        <span className={isEnglish ? 'english' : ''}>EN</span>
        <span className={!isEnglish ? 'chinese' : ''}>中文</span>
      </div>

      <div className={`slider ${isEnglish ? 'english' : 'chinese'}`}>
        <div className="thumb" />
      </div>

    </div>
  )
}

export default LanguageSlider;