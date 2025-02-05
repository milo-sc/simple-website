// import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavLink.css';

const CustomNavLink = ({ to, children }: {to: string; children: React.ReactNode }) => {
  const currentRoute = useLocation();
  const isActive = currentRoute.pathname === to;

  return (
    <NavLink
      to = {to}
      className={`navLink ${isActive ? 'active' : ''}`}
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink;