// import React from 'react';
import './Navigation.css';

import { ChildProps } from '../types';
import CustomNavLink from './NavLink';

import { useLanguage } from '../contexts/Language';

function Navigation(props: ChildProps) {
  const { isEnglish } = useLanguage();
  const { isHovered } = props;

  return (
    <div>
      <nav>
        <ul className='navBar'>
          <li><CustomNavLink to="/booths" isHovered = {isHovered}>
                {isEnglish ? 'Booths' : '卡座沙发'}
              </CustomNavLink></li>

          <li><CustomNavLink to="/chairs" isHovered = {isHovered}>
                {isEnglish ? 'Chairs' : '椅子'}
              </CustomNavLink></li>

          <li><CustomNavLink to="/tables" isHovered = {isHovered}>
                {isEnglish ? 'Tables' : '桌子'}
              </CustomNavLink></li>
              
          <li><CustomNavLink to="/special" isHovered = {isHovered}>
                {isEnglish ? 'Special' : '其它'}
              </CustomNavLink></li>
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;