// import React from 'react';
import './Brand.css';

import { Link } from 'react-router-dom';

function Brand(props: { isHovered: boolean; }) {
  return (
    <div>
      <div>
        <Link to="/" className='brand' style={{color: props.isHovered ? 'black' : 'white'}}>Graceful</Link>
      </div>
      <div>
        <Link to="/" className='brandCN' style={{color: props.isHovered ? 'black' : 'white'}}>雅緻沙發傢俱制造廠</Link>
      </div>
      
    </div>
  )
}

export default Brand;