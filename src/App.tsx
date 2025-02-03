// import React from 'react';
import './App.css';

import { LanguageSetter } from './contexts/Language';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import BackgroundRouter from './components/BackgroundRouter';
import Address from './components/Address';
import Blurb from './components/Blurb';
import Brand from './components/Brand';
import Contact from './components/Contact';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Swatches from './pages/Swatches';

// TODO
// > footer
//  - add wechat qr code
//  - add map
// > header
//  - change blurb to something actually blurby and then add chinese counterpart

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
          <main
            className='content'
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/swatches" element={<Swatches />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <div 
            className='footer'
          >
            <Address /> 
            <Contact />
          </div>
          
        </div>
      </BackgroundRouter>
    </LanguageSetter>
  )
}

export default App;