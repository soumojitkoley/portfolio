import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'
import About from '../../components/About/About.jsx'
import Experience from '../../components/Experience/Experience.jsx';
import Education from '../../components/Education/Education.jsx';
import Skills from '../../components/Skills/Skills.jsx'
import Project from '../../components/Project/Project.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import './Dev.css';

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

function Dev() {

  return (
    <div className='dev-page-container'>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default Dev