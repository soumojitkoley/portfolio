import React, { useState, useContext } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import { AppContext } from './Context/AppContext.jsx'
import { Toaster } from 'react-hot-toast';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './App.css'


function App() {

  let {mode} = useContext(AppContext)

  return (
    <div className={`app-container ${mode ? 'white-theme': 'black-theme'}`}>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills/>
      <Contact/>
      <Footer/>
      <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: 'bold',
            duration: 4000,
            style: {
              borderRadius: '25px',
              marginBottom: '3em',
              textAlign: 'center'
            },
          }}
        />
    </div>
  )
}

export default App
