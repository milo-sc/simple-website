import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav className='navBar'>
        <Link to="/">Homepage</Link>
        <Link to="/test">Picture</Link>
      </nav>
    </div>

  );
};

export default Navigation;