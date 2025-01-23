import React from 'react';
import './Header.css';

function Header(props : any) {
  console.log(props)
  return (
    <div className='header'>
      <h1>This is an h1 heading, {props.name}, {props.color} </h1>
    </div>
  )
}

export default Header;