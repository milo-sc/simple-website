// import React from 'react';
import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { LanguageSetter } from './contexts/Language';

import BackgroundVideo from './components/BackgroundVideo';
import Contact from './components/Contact';
import Blurb from './components/Blurb';
import Brand from './components/Brand';
import WeChat from './components/WeChat';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Booths from './pages/Booths';
// import Chairs from './pages/Chairs';
// import Tables from './pages/Tables';
import Special from './pages/Special';

// footer
//  add google maps integration?
//  hours of operation > mon to sat 9am to 5:30pm - add to the right of address
// booths
//  image shouldnt expand above the nav
// home
//  ? clickable down arrow
// brand
//  SHELVED change brand's text colors when hovering over the brand?
// SHELVED stop video when in another route?
// https://uxwing.com/thin-long-arrow-bottom-icon/ @ icons

function App() {
  const currentLocation = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const isHome = () => {
    switch (currentLocation.pathname) {
      case '/booths': return false;
      default: return true;
    }
  }

  return (
    <LanguageSetter>
      <div className="app">
        {/* Background Video */}
        <BackgroundVideo />

        {/* Main Layer */}
        <div className='mainLayer'>
          {/* Language Toggle */}
          <div 
            className={`language ${isHome() ? '' : 'notHome'}`}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'rgb(60, 59, 58)' : ''}}
          >
            <Blurb isHovered={isHovered}/>
            <LanguageSlider />
          </div>

          {/* Header */}
          <div 
            className={`header ${isHome() ? '' : 'notHome'}`}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'rgb(246, 246, 246)' : ''}}
          >
            <Brand isHovered={isHovered}/>
            <Navigation isHovered={isHovered}/>
          </div>

          {/* Content */}
          <main className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booths" element={<Booths />} />
              {/* <Route path="/chairs" element={<Chairs />} /> */}
              {/* <Route path="/tables" element={<Tables />} /> */}
              <Route path="/special" element={<Special />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <div className='footerLine'></div>

          <div className='footer'>
            <Contact />
            <WeChat />
          </div>

          <div className='footerLine'></div>

          <div  className='footer'>
            <p className='copyright'>
              Copyright © 2000 - 2025
            </p>

            {/* <div>
              credit myself
            </div> */}
          </div>
        </div>
      </div>
    </LanguageSetter>
  )
}

export default App;