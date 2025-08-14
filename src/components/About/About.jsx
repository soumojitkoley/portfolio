import React from 'react'
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

const About = () => {
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
          <a href="https://github.com/soumojitkoley" target='_blank'><div className="about-part1-link-box"><FaGithub size={20} /></div></a>
          <a href="mailto:koleysoumojit6@gmail.com"><div className="about-part1-link-box"><IoIosMail size={25} /></div></a>
          <a href="https://x.com/soumo_dev" target='_blank'><div className="about-part1-link-box"><FaSquareXTwitter size={20} /></div></a>
          <a href="https://www.linkedin.com/in/soumojitkoley/" target='_blank'><div className="about-part1-link-box"><FaLinkedin size={20} /></div></a>
        </div>
      </div>
      <div className="about-part2">
        <div className="about-part2-techbox-row-1">
          <div className="tech-box"><img src={mongoo} /></div>
          <div className="tech-box"><img src={reactt} /></div>
        </div>
        <div className="about-part2-techbox-row-2">
          <div className="tech-box"><img src={expresswhite} /></div>
          <div className="tech-box"><img src={nodejss} /></div>
        </div>
      </div>
    </div>
  )
}

export default About  