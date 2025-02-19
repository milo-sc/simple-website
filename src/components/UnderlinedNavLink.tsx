// import React from 'react';
import './UnderlinedNavLink.css';

import { matchPath, NavLink, useLocation } from 'react-router-dom';

function UnderlinedNavLink(props: { to: string; isHovered: boolean; children: React.ReactNode; }) {
  const currentRoute = useLocation();
  // const isActive = currentRoute.pathname.startsWith(to as string);
  const isActive = !!matchPath(currentRoute.pathname, props.to as string);

  return (
    <NavLink
      to = {props.to || '/'}
      className={`navLink ${isActive ? 'active' : ''}`}
      style={{color: props.isHovered ? 'black' : 'white'}}
    >
      {props.children}
    </NavLink>
  )
}

export default UnderlinedNavLink;