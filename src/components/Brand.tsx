// import React from 'react';
import './Brand.css';

import { Link } from 'react-router-dom';

function Brand(props: { isHovered: boolean; }) {
  return (
    <div className='brand'>
      <Link to="/" className='english' style={{color: props.isHovered ? 'black' : 'white'}} >Graceful Furniture Manufacturing</Link>
        <br></br>
      <Link to="/" className='chinese' style={{color: props.isHovered ? 'black' : 'white'}}>雅緻沙發傢俱制造廠</Link>
    </div>
  )
}

export default Brand;