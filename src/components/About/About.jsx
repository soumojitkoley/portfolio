import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext.jsx';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { IoIosMail, IoMdDownload } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import mongoo from '../../assets/stack/mongodb.svg'
import expresswhite from '../../assets/stack/express-white.svg'
import reactt from '../../assets/stack/react.svg'
import nodejss from '../../assets/stack/nodejs.svg'
import cognizant from '../../assets/icons/cognizant.svg'
import TextLoop from "react-text-loop";
import './About.css'

const techStack = [
  { name: "MongoDB", src: mongoo },
  { name: "React", src: reactt },
  { name: "Express", src: expresswhite },
  { name: "NodeJS", src: nodejss }
]

const socialLinks = [
  { href: "https://github.com/soumojitkoley", icon: <FaGithub size={20} />, target: "_blank" },
  { href: "mailto:koleysoumojit6@gmail.com", icon: <IoIosMail size={25} /> },
  { href: "https://x.com/soumo_dev", icon: <FaSquareXTwitter size={20} />, target: "_blank" },
  { href: "https://www.linkedin.com/in/soumojitkoley/", icon: <FaLinkedin size={20} />, target: "_blank" },
];


const About = () => {

  const rows = []
  for (let i = 0; i < techStack.length; i += 2) {
    rows.push(techStack.slice(i, i + 2))
  }

  let {mode} = useContext(AppContext)

  return (
    <div className='about-container' id='about'>
      <div className="about-part1">
        <div className="about-part1-name">
          <h1>Soumojit Koley</h1>
        </div>
        <div className="about-part1-designation grey">
          <h2>
            <TextLoop springConfig={{ stiffness: 70, damping: 31 }} adjustingSpeed={500}>
              <span className='job-logo'>Engineer at Cognizant <img src={cognizant} alt="" width={'20'} height={'20'}/></span>
              <span>Software Engineer</span>
              <span>Creative Mind</span>
              <span>Problem Solver</span>
              <span>Tech Enthusiast</span>
            </TextLoop>
          </h2>
        </div>
        <div className="about-part1-email-location grey">
          <div className='about-part1-email'>
            <IoMailOutline size={19} />
            <a href="mailto:koleysoumojit6@gmail.com">koleysoumojit6@gmail.com</a>
          </div>
          <div className='about-part1-location'>
            <IoLocationOutline size={19} />
            <p>Kolkata, India</p>
          </div>
        </div>
        <div className="about-part1-bio grey">
          <p>A goal-oriented software developer with experience in building web applications using modern technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.</p>
        </div>
        <div className="about-part1-links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download><div className="resume-download-btn">
            <IoMdDownload size={20} />
            <p>Resume</p>
          </div>
          </a>
          {socialLinks.map((link, idx) => (
        <a 
          key={idx} 
          href={link.href} 
          target={link.target || "_self"} 
          rel={link.target === "_blank" ? "noopener noreferrer" : ""}
        >
          <div className={`about-part1-link-box ${mode ? 'about-ink-box-white' : ''}`}>{link.icon}</div>
        </a>
      ))}
        </div>
      </div>
      <div className="about-part2">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className={`about-part2-techbox-row-${rowIdx + 1}`}>
          {row.map((tech, idx) => (
            <div className={`tech-box ${mode ? 'white-icon' : 'dark-icon'}`} key={idx}>
              <img src={tech.src} alt={tech.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  )
}

export default About  