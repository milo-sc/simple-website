// import React from 'react';
import './NavLinkImage.css';

function NavLinkImage(props: { source: string; alt: string; className: string; } ) {
  return (
    <div>
      <img src={props.source} alt={props.alt} className={props.className} loading="lazy"/>
      <span> {props.alt} </span>
    </div>
  )
}

export default NavLinkImage;