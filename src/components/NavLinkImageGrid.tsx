// import React from 'react';
import './NavLinkImageGrid.css';

import NavLinkImage from "./NavLinkImage";

const NavLinkImageGrid = () => {
  const imageNumbers = Array.from({ length: 63 }, (_, i) => i + 1);

  return (
    <div className="navLinkImageGrid">
      {imageNumbers.map((num) => (
        <NavLinkImage
          key={num}
          source={`/booths_images/${num}.gif`}
          alt={`${num}`}
          className="square"
        />
      ))}
    </div>
  );
};

export default NavLinkImageGrid;