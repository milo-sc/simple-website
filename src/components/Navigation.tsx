import React from 'react';
import './Navigation.css';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Promo from './Promo';

function Navigation() {
  return (
    <div>
      <nav className='navItem'>
        <Link to="/">Homepage</Link>
        <Link to="/test">Picture</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<Promo />} />
      </Routes>
    </div>

  );
};

export default Navigation;