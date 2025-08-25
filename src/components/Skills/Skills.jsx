import React, { useContext } from 'react'
import skillsData from '../../data/skills.js'
import { AppContext } from '../../Context/AppContext.jsx'
import { Fade } from "react-awesome-reveal"
import githubLogoWhite from '../../assets/stack/github-white.svg'
import './Skills.css'

const Skills = () => {

  let { mode } = useContext(AppContext)

  return (
    <div className='skill-container' id='skills'>
      <div className="skill-part">
        <div className="skill-part1-name">
          <Fade direction='up' triggerOnce><h1>Skills</h1></Fade>
        </div>
        <div className="skill-list">
          {
            skillsData.map((eachData, idx) => (
              <div className="skill-category">
                <div className='skill-catogory-name'>
                <Fade direction='up' triggerOnce><h2 className='bold l-font'>{eachData.name}</h2></Fade>
                </div>
                <div className='skill-category-item'>
                  {
                    eachData.icons.map((eachLogo, idx) => (
                      <div className='skill-tech-icon-name' key={idx}>
                        <Fade direction='up' triggerOnce>
                          <div className={`skill-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                            <img
                              src={mode && eachLogo.name === "Github" ? githubLogoWhite : eachLogo.src} alt={eachLogo.name}/>
                          </div>
                        </Fade>
                        <div className="skill-tech-name">
                          <Fade direction='up' triggerOnce><p>{eachLogo.name}</p></Fade>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills