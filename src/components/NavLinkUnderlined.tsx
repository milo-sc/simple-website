// import React from 'react';
import './NavLinkUnderlined.css';

import { matchPath, NavLink, useLocation } from 'react-router-dom';

function NavLinkUnderlined(props: { to: string; isHovered: boolean; children: React.ReactNode; }) {
  const currentRoute = useLocation();
  // const isActive = currentRoute.pathname.startsWith(to as string);
  const isActive = !!matchPath(currentRoute.pathname, props.to as string);

  return (
    <NavLink
      to = {props.to || '/'}
      className={`navLinkUnderlined ${isActive ? 'active' : ''}`}
      style={{color: props.isHovered ? 'black' : 'white'}}
    >
      {props.children}
    </NavLink>
  )
}

export default NavLinkUnderlined;