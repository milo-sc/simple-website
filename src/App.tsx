// import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { LanguageSetter } from './contexts/Language';

import BackgroundRouter from './components/BackgroundRouter';
import Brand from './components/Brand';
import Address from './components/Address';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Swatches from './pages/Swatches';
import Contact from './components/Contact';


function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LanguageSetter>
      <BackgroundRouter>
        <div>
          {/* Language Toggle */}
          <div className='language' style={{backgroundColor: isHovered ? 'rgb(60, 59, 58)' : ''}}>
            <LanguageSlider />
          </div>

          {/* Header */}
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='header'>
            <Brand isHovered={isHovered}/>

            <div className='container'>
              <Navigation isHovered={isHovered}/>
            </div>
          </div>

          {/* Content */}
          <main className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/swatches" element={<Swatches />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <div className='footer'>
            <Address /> 
            <Contact />
          </div>
          
        </div>
      </BackgroundRouter>
    </LanguageSetter>
  )
}

export default App;