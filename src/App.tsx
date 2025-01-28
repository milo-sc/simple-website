import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Promo from './components/Promo';


function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />

        <Navigation />
      </div>
      
      <div className='content'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Promo />} />
        </Routes>
      </div>
      

      <Footer /> 

      {/*
      
      <div className='container'>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>

      <Promo />
      */}

    </div>
  )
}

export default App;