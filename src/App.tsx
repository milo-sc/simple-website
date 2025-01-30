// import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { LanguageSetter } from './contexts/Language';

import Brand from './components/Brand';
import Footer from './components/Footer';
import LanguageSlider from './components/LanguageSlider';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import Swatches from './pages/Swatches';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LanguageSetter>
      <div className='app'>
        <div className='language'>
          <LanguageSlider />
        </div>

        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='header'>
          <Brand isHovered={isHovered}/>

          <div className='container'>
            <Navigation isHovered={isHovered}/>
          </div>
        </div>
        
        {/* <div style={{height: 333px}}></div> */}

        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swatches" element={<Swatches />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </LanguageSetter>
  )
}

export default App;