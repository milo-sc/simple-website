// import React from 'react';
import './Navigation.css';

import CustomNavLink from './CustomNavLink';

import { useLanguage } from '../contexts/Language';

function Navigation(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  return (
    <div>
      <nav>
        <ul className='navBar'>
          <li><CustomNavLink to="/booths" isHovered = {props.isHovered}>
                {isEnglish ? 'Booths' : '卡座沙发'}
              </CustomNavLink></li>

          <li><CustomNavLink to="/chairs" isHovered = {props.isHovered}>
                {isEnglish ? 'Chairs' : '椅子'}
              </CustomNavLink></li>

          <li><CustomNavLink to="/tables" isHovered = {props.isHovered}>
                {isEnglish ? 'Tables' : '桌子'}
              </CustomNavLink></li>
              
          <li><CustomNavLink to="/special" isHovered = {props.isHovered}>
                {isEnglish ? 'Special' : '其它'}
              </CustomNavLink></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navigation;