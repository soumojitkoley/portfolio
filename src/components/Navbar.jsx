import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode  } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setLightMode] = useState(false);

  const scrollHandler = (id) => {
    const section = document.querySelector(id)
    section?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  };

  return (
    <div className="navbar-container">
      <div className='navbar'>
      <h2 onClick={() => scrollHandler('')} className='navbar-h1'>Soumojit.</h2>

      {!isMobile && (
        <div className="nav-menu menu-open">
          <ul className="list">
            <li><a className="link" onClick={() => scrollHandler('#about')}>About</a></li>
            <li><a className="link" onClick={() => scrollHandler('#experience')}>Experience</a></li>
            <li><a className="link" onClick={() => scrollHandler('#education')}>Education</a></li>
            <li><a className="link" onClick={() => scrollHandler('#skills')}>Skills</a></li>
            <li><a className="link" onClick={() => scrollHandler('#projects')}>Projects</a></li>
            <li><a className="link" onClick={() => setLightMode(!isLightMode)}>{isLightMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}</a></li>
          </ul>
        </div>
      )}

      {isMobile && (
        <div className="mobile-icons">
          <a className="link" onClick={() => scrollHandler('#theme')}><MdOutlineLightMode size={20} /></a>
          <a className="link" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </a>
        </div>
      )}

      {isMobile && (
        <div className={`mobile-dropdown ${isMenuOpen ? 'open' : 'closed'}`}>
          <ul className="list">
            <li><a className="link" onClick={() => scrollHandler('#about')}>About</a></li>
            <li><a className="link" onClick={() => scrollHandler('#experience')}>Experience</a></li>
            <li><a className="link" onClick={() => scrollHandler('#education')}>Education</a></li>
            <li><a className="link" onClick={() => scrollHandler('#skills')}>Skills</a></li>
            <li><a className="link" onClick={() => scrollHandler('#projects')}>Projects</a></li>
            <li><a className="link" onClick={() => scrollHandler('#contact')}>Contact</a></li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
