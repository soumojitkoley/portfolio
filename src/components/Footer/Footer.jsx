import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Footer.css";

const Footer = () => {
  const words = [
    "innovation",
    "passion",
    "resilience",
    "design",
    "growth",
    "efficiency",
    "vision",
    "curiosity",
  ];

  const [word, setWord] = useState(words[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWord((prev) => {
          const nextIndex = (words.indexOf(prev) + 1) % words.length;
          return words[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-part-1">
        <Fade direction='up' triggerOnce><h1 className={`word ${fade ? "fade-in" : "fade-out"}`}>{word}</h1></Fade>
      </div>
      <div className="footer-part-2">
        <p className="bold s-font grey">© 2025 Soumojit. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
