// import React from 'react';
import './Navigation.css';

import { ChildProps } from '../types';
import { Link } from 'react-router-dom';

import { useLanguage } from '../contexts/Language';

function Navigation(props: ChildProps) {
  const { isEnglish } = useLanguage();
  const { isHovered } = props;

  return (
    <div>
      <nav>
        <ul className='navBar'>
          {/* <li><Link to="/" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Home</Link></li> */}
          <li><Link to="/" 
                className='navItem' 
                style={{color: isHovered ? 'black' : 'white'}}
              >
                {isEnglish ? 'Booths' : '卡座沙发'}
              </Link></li>

          <li><Link to="/" 
                className='navItem' 
                style={{color: isHovered ? 'black' : 'white'}}
              >
                {isEnglish ? 'Chairs' : '椅子'}
              </Link></li>

          <li><Link to="/Swatches" 
                className='navItem' 
                style={{color: isHovered ? 'black' : 'white'}}
              >
                {isEnglish ? 'Tables' : '桌子'}
              </Link></li>

          <li><Link to="/About" 
                className='navItem' 
                style={{color: isHovered ? 'black' : 'white'}}
              >
                {isEnglish ? 'Special' : '其它'}
              </Link></li>
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;