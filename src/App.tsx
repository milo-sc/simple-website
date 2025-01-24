import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav /> 
      
      <div className='container'>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>

      <Promo />
      <Footer />
    </div>
  )
}

export default App;