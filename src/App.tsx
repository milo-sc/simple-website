// import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { LanguageSetter } from './contexts/Language';

import Contact from './components/Contact';
import Blurb from './components/Blurb';
import Brand from './components/Brand';
import WeChat from './components/WeChat';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Booths from './pages/Booths';
import Chairs from './pages/Chairs';
import Tables from './pages/Tables';
import Special from './pages/Special';

// footer
//  add map
//  google maps integration -> hyperlink? or google maps integration

// home
//  change arrow to be less bold

// booths
//  mouse hover -> picture gets bigger

// remove background router -> change header to use location
// stop video when in another tab?

// hours of operation? mon to sat 9am to 5:30pm - add to the right of address 
// make address a hyperlink

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LanguageSetter>
      <div className="videoContainer">
        <video autoPlay muted loop playsInline className='backgroundVideo'>
          <source src="/background.mp4" type="video/mp4"></source>
        </video>
        <div className='overlay'>
          {/* Language Toggle */}
          <div 
            className='language'
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'rgb(60, 59, 58)' : ''}}
          >
            <Blurb isHovered={isHovered}/>
            <LanguageSlider />
          </div>

          {/* Header */}
          <div 
            className='header'
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
              <Route path="/chairs" element={<Chairs />} />
              <Route path="/tables" element={<Tables />} />
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