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
//  - add map
// > header
//  - change blurb

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
            
            <div>
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
          <div className='footerLine'></div>

          <div className='footer'>
            <Address />
            <Contact />
          </div>

          <div className='footerLine'></div>

          <div  className='footer'>
            <p className='copyright'>
              Copyright © 2000 - 2025
            </p>

            <div>
              <a href="https://www.flaticon.com/free-icons/location" title="location icons" className='attribution'>Icons created by Freepik, </a>
                <span> </span>
              <a href="https://www.flaticon.com/free-icons/phone" title="phone icons" className='attribution'>Gregor Cresnar, </a>
                <span> </span>
              <a href="https://www.flaticon.com/free-icons/fax" title="fax icons" className='attribution'>yaicon - Flaticon</a>
            </div>
          </div>
          
        </div>
      </BackgroundRouter>
    </LanguageSetter>
  )
}

export default App;