// import React from 'react';
import './Navigation.css';

import NavLinkUnderlined from './NavLinkUnderlined';

import { useLanguage } from '../contexts/Language';

function Navigation(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  return (
    <div>
      <nav>
        <ul className='navBar'>
          <li><NavLinkUnderlined to="/booths" isHovered = {props.isHovered}>
                {isEnglish ? 'Booths' : '卡座沙发'}
              </NavLinkUnderlined></li>

          <li><NavLinkUnderlined to="/chairs" isHovered = {props.isHovered}>
                {isEnglish ? 'Chairs' : '椅子'}
              </NavLinkUnderlined></li>

          <li><NavLinkUnderlined to="/tables" isHovered = {props.isHovered}>
                {isEnglish ? 'Tables' : '桌子'}
              </NavLinkUnderlined></li>
              
          <li><NavLinkUnderlined to="/special" isHovered = {props.isHovered}>
                {isEnglish ? 'Special' : '其它'}
              </NavLinkUnderlined></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navigation;