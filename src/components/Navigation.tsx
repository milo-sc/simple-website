// import React from 'react';
import './Navigation.css';

import UnderlinedNavLink from './UnderlinedNavLink';

import { useLanguage } from '../contexts/Language';

function Navigation(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  return (
    <div>
      <nav>
        <ul className='navBar'>
          <li><UnderlinedNavLink to="/booths" isHovered = {props.isHovered}>
                {isEnglish ? 'Booths' : '卡座沙发'}
              </UnderlinedNavLink></li>

          <li><UnderlinedNavLink to="/chairs" isHovered = {props.isHovered}>
                {isEnglish ? 'Chairs' : '椅子'}
              </UnderlinedNavLink></li>

          <li><UnderlinedNavLink to="/tables" isHovered = {props.isHovered}>
                {isEnglish ? 'Tables' : '桌子'}
              </UnderlinedNavLink></li>
              
          <li><UnderlinedNavLink to="/special" isHovered = {props.isHovered}>
                {isEnglish ? 'Special' : '其它'}
              </UnderlinedNavLink></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navigation;