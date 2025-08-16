import React from 'react'
import skillsData from '../../data/skills.js'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skill-container' id='skills'>
      <div className="skill-part">
        <div className="skill-part1-name">
          <h1>Skills</h1>
        </div>
        <div className="skill-list">
          {
            skillsData.map((eachData, idx) => (
              <div className="skill-category">
                <div className='skill-catogory-name'>
                  <h2>{eachData.name}</h2>
                </div>
                <div className='skill-category-item'>
                  {
                    eachData.icons.map((eachLogo, idx) => (
                      <div className='skill-tech-icon-name' key={idx}>
                        <div className="skill-tech-icon">
                          <img src={eachLogo.src} alt="" />
                        </div>

                        <div className="skill-tech-name">
                          <p>{eachLogo.name}</p>
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