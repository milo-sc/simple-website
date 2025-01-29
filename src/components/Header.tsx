// import React from 'react';
import { ChildProps } from '../types';
import { Link } from 'react-router-dom';

import './Header.css';

function Header(props: ChildProps) {
  const { isHovered } = props;

  return (
    <div>
      <Link to="/" className='header' style={{color: isHovered ? 'black' : 'white'}} >Elegance Manufacturing</Link>
    </div>
  )
}

export default Header;