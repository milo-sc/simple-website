// import React from 'react';
import './Navigation.css';

import { ChildProps } from '../types';
import { Link } from 'react-router-dom';

import { useLanguage } from '../contexts/Language';

import LanguageSlider from '../components/LanguageSlider'

function Navigation(props: ChildProps) {
  const { isHovered } = props;
  const { isEnglish } = useLanguage();

  return (
    <div>
      <nav>
        <ul className='navBar'>
          {/* <li><Link to="/" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Home</Link></li> */}
          <li><Link to="/swatches" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>{isEnglish ? 'Swatches' : '色板'}</Link></li>
          <li><Link to="/about" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>{isEnglish ? 'About' : '关于'}</Link></li>
          <LanguageSlider />
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;