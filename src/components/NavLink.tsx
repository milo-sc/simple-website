// import React from 'react';
import './NavLink.css';

import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { ChildProps } from '../types';

const CustomNavLink = ({ to, children, isHovered }: ChildProps) => {
  const currentRoute = useLocation();
  // const isActive = currentRoute.pathname.startsWith(to as string);
  const isActive = !!matchPath(currentRoute.pathname, to as string);

  return (
    <NavLink
      to = {to || '/'}
      className={`navLink ${isActive ? 'active' : ''}`}
      style={{color: isHovered ? 'black' : 'white'}}
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink;