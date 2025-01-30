// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Brand from './components/Brand';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Swatches from './pages/Swatches';
import About from './pages/About';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='app'>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='container'>
        <Brand isHovered={isHovered}/>

        <Navigation isHovered={isHovered}/>
      </div>
      
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swatches" element={<Swatches />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <Footer /> 

    </div>
  )
}

export default App;