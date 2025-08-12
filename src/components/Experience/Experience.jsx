import React from 'react'
import expdata from '../../data/experience.js'
import mongoLogo from '../../assets/stack/mongodb.svg'
import jsLogo from '../../assets/stack/js.svg'
import reactLogo from '../../assets/stack/react.svg'
import nodejsLogo from '../../assets/stack/nodejs.svg'
import './Experience.css'

const Experience = () => {
  return (
    <div className='exp-container' id='experience'>
      <div className="exp-part">
        <div className="exp-part1-name">
          <h1>Experience</h1>
        </div>

        <div className="job-list">
          <div className="job-list-part1">
            <div className="job-title-company">
              <h2>Frontend Developer Intern</h2>
              <h3>Lincode</h3>
            </div>
            <div className="job-details">
              <ul>
                <li>Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction</li>
                <li>Designed and implemented responsive 'Important Links' and 'Events' pages using React.js</li>
              </ul>
            </div>
            <div className="job-tech-used">
              <div className="job-tech-icon">
                <img src={mongoLogo} alt="" />
              </div>
              <div className="job-tech-icon">
              <img src={jsLogo} alt="" />
              </div>
              <div className="job-tech-icon">
              <img src={reactLogo} alt="" />
              </div>
              <div className="job-tech-icon">
              <img src={nodejsLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="job-list-part2">
            <div className="job-date">
              <p>May 2025 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience