import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import Intro1 from './components/Intro1';
// import Intro2 from './components/Intro2';
// import Intro3 from './components/Intro3';
// import Promo from './components/Promo';
import Footer from './components/Footer';
// import { Link, Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Header />

      <Navigation />

      {/* <nav>
        <Link to="/">Homepage</Link>
        <Link to="/test">Picture</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<Promo />} />
      </Routes> */}

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