import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline  } from "react-icons/io5";
import { IoIosMail, IoMdDownload } from "react-icons/io";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";

import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className="about-part1">
        <div className="about-part1-name">
          <h1>Soumojit Koley</h1>
        </div>
        <div className="about-part1-designation">
          <h2>Software Engineer</h2>
        </div>
        <div className="about-part1-email-location">
          <div className='about-part1-email'>
            <IoMailOutline size={19}/>
            <a href="mailto:koleysoumojit6@gmail.com">koleysoumojit6@gmail.com</a>
          </div>
          <div className='about-part1-location'>
            <IoLocationOutline size={19}/>  
            <p>Kolkata, India</p>
          </div>
        </div>
        <div className="about-part1-bio">
          <p>A goal-oriented software developer with experience in building web applications using modern technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.</p>
        </div>
        <div className="about-part1-links">
          <div className="resume-download-btn">
            <IoMdDownload size={20}/>
            <p>Resume</p>
          </div>
          <a href="https://github.com/soumojitkoley" target='_blank'><div className="about-part1-link-box"><FaGithub size={20}/></div></a>
          <a href="mailto:koleysoumojit6@gmail.com"><div className="about-part1-link-box"><IoIosMail size={25}/></div></a>
          <a href="https://x.com/soumo_dev" target='_blank'><div className="about-part1-link-box"><FaSquareXTwitter size={20} /></div></a>
          <a href="https://www.linkedin.com/in/soumojitkoley/" target='_blank'><div className="about-part1-link-box"><FaLinkedin size={20}/></div></a>
        </div>
      </div>
      <div className="about-part2">
        <div className="about-part2-techbox-row-1">
          <div className="tech-box"><img src="https://assets.chanhdai.com/images/tech-stack-icons/js.svg" /></div>
          <div className="tech-box"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" /></div>
        </div>
        <div className="about-part2-techbox-row-2">
          <div className="tech-box"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" /></div>
          <div className="tech-box"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" /></div>
        </div>
      </div>
    </div>
  )
}

export default About  