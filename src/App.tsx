// import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { LanguageSetter } from './contexts/Language';

import BackgroundRouter from './components/BackgroundRouter';
import Address from './components/Address';
import Blurb from './components/Blurb';
import Brand from './components/Brand';
import Contact from './components/Contact';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Booths from './pages/Booths';
import Chairs from './pages/Chairs';
import Tables from './pages/Tables';
import Special from './pages/Special';

// > footer
//  - add wechat qr code
//  - DELAY add map
// > header
//  - DELAY change blurb
//  - new company name
// > background video
//  - add arrow to the bottom to show that theres more
// > mobile compatability
//  - rearrange the bottom
// > can set a website font via index but <pre> in address, ocntact, captionedimage, and summary will not take website font

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LanguageSetter>
      <BackgroundRouter>
        <div>
          {/* Language Toggle */}
          <div 
            className='language'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'rgb(60, 59, 58)' : ''}}
          >
            <Blurb isHovered={isHovered}/>
            <LanguageSlider />
          </div>

          {/* Header */}
          <div 
            className='header'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'rgb(246, 246, 246)' : ''}}
          >
            <Brand isHovered={isHovered}/>
            
            <div className='container'>
              <Navigation isHovered={isHovered}/>
            </div>
          </div>

          {/* Content */}
          <main className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booths" element={<Booths />} />
              <Route path="/chairs" element={<Chairs />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/special" element={<Special />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <div className='footerLine'>

          </div>

          <div className='footer'>
            <Address /> 
            <Contact /> 
          </div>

          <div className='footerLine'>
            <p className='copyright'>
              Copyright © 2000 - 2025
            </p>
          </div>
          
        </div>
      </BackgroundRouter>
    </LanguageSetter>
  )
}

export default App;