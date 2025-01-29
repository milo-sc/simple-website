// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Promo from './pages/Promo';


function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='app'>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='container'>
        <Header isHovered={isHovered}/>

        <Navigation isHovered={isHovered}/>
      </div>
      
      <main className='content'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Promo />} />
        </Routes>
      </main>
      
      <Footer /> 

    </div>
  )
}

export default App;