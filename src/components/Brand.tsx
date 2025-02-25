// import React from 'react';
import './Brand.css';

import { Link } from 'react-router-dom';

function Brand(props: { isHovered: boolean; }) {
  return (
    <div>
      <Link to="/" className='brand' style={{color: props.isHovered ? 'black' : 'white'}}>Graceful Furniture Manufacturing</Link>
        <br></br>
      <Link to="/" className='brandCN' style={{color: props.isHovered ? 'black' : 'white'}}>雅緻沙發傢俱制造廠</Link>
    </div>
  )
}

export default Brand;