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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setLightMode] = useState(false);
  
  let {modeClickHandler, mode} = useContext(AppContext)

  const scrollHandler = (scrollTarget) => {
    const positions = {
      about: { desktop: 0, mobile: 0 },
      experience: { desktop: 400, mobile: 800 },
      education: { desktop: 1035, mobile: 1590 },
      skills: { desktop: 1540, mobile: 2170 },
      contact: { desktop: 2285, mobile: 3010 },
    };
  
    if (scrollTarget === "") {
      locomotiveScroll.scrollTo(0, 0);
    } else {
      const device = isMobile ? "mobile" : "desktop";
      locomotiveScroll.scrollTo(positions[scrollTarget][device]);
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
