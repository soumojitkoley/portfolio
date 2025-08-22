import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { FiChevronUp } from "react-icons/fi";
import { AppContext } from '../../Context/AppContext';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './BackToTop.css'


const BackToTop = () => {

  let { mode } = useContext(AppContext)

  function bTTHandler() {
    locomotiveScroll.scrollTo(0, 0);
  }
  const [scrollingBT, setScrollingBT] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollingBT(true);
      } else {
        setScrollingBT(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`btt-btn ${scrollingBT ? 'scrolledbt' : ''} ${mode ? 'white-icon' : 'dark-icon'}`} onClick={bTTHandler}>
      <FiChevronUp  size={20}/>
    </div>
  )
}

export default BackToTop