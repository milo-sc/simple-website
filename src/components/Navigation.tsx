// import React from 'react';
import { ChildProps } from '../types';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation(props: ChildProps) {
  const { isHovered } = props;

  return (
    <div>
      <nav>
        <ul className='navBar'>
          <li><Link to="/" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Home</Link></li>
          <li><Link to="/swatches" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Swatches</Link></li>
          <li><Link to="/about" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>About</Link></li>
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;