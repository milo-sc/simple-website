import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />

      <Navigation />

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