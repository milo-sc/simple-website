import React from 'react';

function Header(props : any) {
  console.log(props)
  return (
    <h1>This is an h1 heading, {props.name}, {props.color} </h1>
  )
}

export default Header;