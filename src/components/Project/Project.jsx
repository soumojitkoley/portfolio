import React, { useContext } from 'react'
import projectData from '../../data/projects.js'
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { AppContext } from '../../Context/AppContext.jsx';
import { Fade } from "react-awesome-reveal";
import './Project.css'

const Project = () => {

  let { mode } = useContext(AppContext)

  return (
    <div className='project-container' id='project'>
      <div className="project-title">
        <Fade direction='up' triggerOnce><h1>Projects</h1></Fade>
      </div>
      <div className="projects-cards">
        {
          projectData.map((eachProject, idx) => (
            <div className="project-each-card" id={idx}>
              <div className='project-name-desc'>
                <Fade direction='up' triggerOnce><h1 className='l-font bold'>{eachProject.name}</h1></Fade>
                <Fade direction='up' triggerOnce><h2 className='m-font bold grey'>{eachProject.short_desc}</h2></Fade>
              </div>
              <div className="project-features">
                {
                  eachProject.features.map((eachFeature, idx) => (
                    <div className="project-feature-list" id={idx}>
                      <Fade direction='up' triggerOnce><li className='s-font'>{eachFeature}</li></Fade>
                    </div>
                  ))
                }
              </div>
              <div className="project-tech-used">
                {
                  eachProject.tech.map((eachTech, idx) => (
                    <Fade direction='up' triggerOnce>
                      <div className={`project-tech-list ${mode ? 'white-icon' : 'dark-icon'} bold`} id={idx}>
                        <p className='s-font bold'>{eachTech}</p>
                      </div>
                    </Fade>
                  ))
                }
              </div>
              <div className="project-btns">
                <Fade direction='up' triggerOnce>
                  <a href={eachProject.live} target='_blank' className="project-links-btn">
                    <FiArrowUpRight size={20} />
                    <p>Live</p>
                  </a>
                </Fade>
                <Fade direction='up' triggerOnce>
                  <a href={eachProject.github} target='_blank' className="project-links-btn">
                    <FiGithub size={20} />
                    <p>Github</p>
                  </a>
                </Fade>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project