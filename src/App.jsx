import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div className='app-container' data-scroll-container>
      <div className="nav-part">
        <Navbar />
      </div>
      <div className="about-part">
        <About/>
      </div>
      <div className="about-part1">

      </div>
      <div className="about-part1">

      </div>
      <div className="about-part1">

      </div>
      <div className="about-part1">

      </div>
      <div className="about-part1">

      </div>
      
    </div>
  )
}

export default App
