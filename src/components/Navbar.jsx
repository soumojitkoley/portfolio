import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  };


  return (
    <div className="navbar">
      <h2 onClick={() => { scrollHandler('') }} className='navbar-h1'>Soumojit.</h2>
      {isMobile ? (
        <div className='hello'>
          <label class="burger" for="burger">
            <input type="checkbox" checked={isMenuOpen} readOnly onClick={handleMenuToggle} id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div key={isMenuOpen ? 'menu-open' : 'menu-closed'} className={'fullnav-mob'} data-visible="true"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nav-menu">
                <h2 onClick={() => { scrollHandler('') }} className='navbar-h1-mobile'>Soumojit.</h2>
                  <ul type="none" className="list">
                    <li>
                      <a onClick={() => scrollHandler('#abt')} className="link">
                        About
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollHandler('#abt')} className="link">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuToggle} className="link">
                        Education
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollHandler('#svc')} className="link">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollHandler('#svc')} className="link">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a onClick={() => scrollHandler('#ft')} className="link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="nav-menu">
          <ul type="none" className="list">
            <li>
              <a onClick={() => scrollHandler('#abt')} className="link">
                About
              </a>
            </li>
            <li>
              <a onClick={() => scrollHandler('#abt')} className="link">
                Experience
              </a>
            </li>
            <li>
              <a onClick={() => scrollHandler('#svc')} className="link">
                Education
              </a>
            </li>
            <li>
              <a onClick={() => scrollHandler('#svc')} className="link">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => scrollHandler('#svc')} className="link">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => scrollHandler('#ft')} className="link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;