// import React from 'react';
import './Navigation.css';

import { useLanguage } from '../contexts/Language';

import NavLinkUnderlined from './NavLinkUnderlined';

function Navigation(props: { isHovered: boolean; }) {
  const { isEnglish } = useLanguage();

  return (
    <nav>
      <ul className='navigation'>
        <li className='item'><NavLinkUnderlined to="/booths" isHovered = {props.isHovered}>
              {isEnglish ? 'Booths' : '卡座沙发'}
            </NavLinkUnderlined></li>

        {/* <li className='item'><NavLinkUnderlined to="/chairs" isHovered = {props.isHovered}>
              {isEnglish ? 'Chairs' : '椅子'}
            </NavLinkUnderlined></li> */}

        {/* <li className='item'><NavLinkUnderlined to="/tables" isHovered = {props.isHovered}>
              {isEnglish ? 'Tables' : '桌子'}
            </NavLinkUnderlined></li> */}
            
        <li className='item'><NavLinkUnderlined to="/special" isHovered = {props.isHovered}>
              {isEnglish ? 'Special' : '其它'}
            </NavLinkUnderlined></li>
      </ul>
    </nav>
  )
}

export default Navigation;