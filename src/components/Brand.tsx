// import React from 'react';
import './Brand.css';

import { ChildProps } from '../types';
import { Link } from 'react-router-dom';

function Brand(props: ChildProps) {
  const { isHovered } = props;

  return (
    <div>
      <Link to="/" className='brand' style={{color: isHovered ? 'black' : 'white'}} >Elegance Manufacturing</Link>
    </div>
  )
}

export default Brand;