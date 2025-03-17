// import React from 'react';
import './Brand.css';

function Brand(props: { isHovered: boolean; }) {
  return (
    <div className='brand'>
      <a href="/" className='english' style={{color: props.isHovered ? 'black' : 'white'}} >Graceful Furniture Manufacturing</a>
        <br></br>
      <a href="/" className='chinese' style={{color: props.isHovered ? 'black' : 'white'}}>雅緻沙發傢俱制造廠</a>
    </div>
  )
}

export default Brand;