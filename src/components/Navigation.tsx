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
          <li><Link to="/" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Homepage</Link></li>
          <li><Link to="/test" className='navItem' style={{color: isHovered ? 'black' : 'white'}}>Picture</Link></li>
        </ul>
      </nav>
    </div>

  );
};

export default Navigation;