import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
// import LocomotiveScroll from 'locomotive-scroll';
import './App.css'

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true
  //   });
  
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);
  return (
    <div className='app-container' >
        <Navbar />
        <About/>
    </div>
  )
}

export default App
