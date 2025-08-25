import React, { useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode  } from "react-icons/md";
import { AppContext } from '../../Context/AppContext.jsx'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './Navbar.css';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setLightMode] = useState(false);
  
  let {modeClickHandler, mode} = useContext(AppContext)

  const scrollHandler = (scrollTarget) => {
    if (scrollTarget === "") {
      locomotiveScroll.scrollTo(0);
    } else {
      const targetEl = document.getElementById(scrollTarget);
  
      if (targetEl) {
        locomotiveScroll.scrollTo(targetEl, {
          offset: -110,
        });
      }
    }
    setMenuOpen(false);
  };
  
  const handleModeClick = () => {
    setLightMode(!isLightMode);
    modeClickHandler();
  };

  return (
    <div className={`navbar-container`}>
      <div className='navbar'>
      <h2 onClick={() => scrollHandler('')} className='navbar-h1 l-font'>Hello 👋, World!</h2>

      {!isMobile && (
        <div className="nav-menu menu-open">
          <ul className="list">
            <li><a className="link" onClick={() => scrollHandler('about')}>About</a></li>
            <li><a className="link" onClick={() => scrollHandler('experience')}>Experience</a></li>
            <li><a className="link" onClick={() => scrollHandler('education')}>Education</a></li>
            <li><a className="link" onClick={() => scrollHandler('skills')}>Skills</a></li>
            <li><a className="link" onClick={() => scrollHandler('projects')}>Projects</a></li>
            <li><a className="link" onClick={() => scrollHandler('contact')}>Contact</a></li>
            <li><a className="link" onClick={handleModeClick}>{!isLightMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}</a></li>
          </ul>
        </div>
      )}

      {isMobile && (
        <div className="mobile-icons">
          <a className="link" onClick={handleModeClick}>{!isLightMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}</a>
          <a className="link" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </a>
        </div>
      )}

      {isMobile && (
        
        <div className={`mobile-dropdown ${isMenuOpen ? 'open' : 'closed'} ${mode ? 'white-theme': ''}`}>
          <Fade direction='down' duration={2000}>
          <ul className="list">
            <li><a className="link" onClick={() => scrollHandler('about')}>About</a></li>
            <li><a className="link" onClick={() => scrollHandler('experience')}>Experience</a></li>
            <li><a className="link" onClick={() => scrollHandler('education')}>Education</a></li>
            <li><a className="link" onClick={() => scrollHandler('skills')}>Skills</a></li>
            <li><a className="link" onClick={() => scrollHandler('projects')}>Projects</a></li>
            <li><a className="link" onClick={() => scrollHandler('contact')}>Contact</a></li>
          </ul>
          </Fade>
        </div>
        
      )}
      </div>
    </div>
  );
};

export default Navbar;
