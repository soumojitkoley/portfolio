import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import expData from '../../data/experience.js'
import { AppContext } from '../../Context/AppContext.jsx';
import { Fade } from "react-awesome-reveal";
import ReactRouterLogoWhite from '../../assets/stack/react-router-white.svg'
import './Experience.css'

const ExperienceRole = ({ role, company, isMobile, mode, showConnector }) => {
  return (
  <div className={`exp-role ${showConnector ? 'exp-role--linked' : ''}`}>
    {showConnector && <div className="exp-promotion-line" aria-hidden="true" />}
    <div className="exp-list">
      <div className="exp-list-part1">
        <div className="exp-title-company">
      <Fade direction='up' triggerOnce><h2 className='bold'>{role.title}</h2></Fade>
          <Fade direction='up' triggerOnce><h3 className='grey m-font bold'>{company}</h3></Fade>
          {isMobile && (
            <div className="exp-date">
              <Fade direction='up' triggerOnce><p className='bold s-font'>{role.year}</p></Fade>
            </div>
          )}
        </div>
        <div className="exp-details s-font">
          <ul>
            {role.details.map((detail, detailIdx) => (
              <Fade direction='up' triggerOnce key={detailIdx}>
                <li>{detail}</li>
              </Fade>
            ))}
          </ul>
        </div>
        <div className="exp-tech-used">
          {role.tech.map((eachLogo, techIdx) => (
            <div className='exp-tech-icon-name' key={techIdx}>
              <Fade direction='up' triggerOnce>
                <div className={`exp-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                  <img
                    src={mode && eachLogo.name === "React Router" ? ReactRouterLogoWhite : eachLogo.src}
                    alt={eachLogo.name}
                  />
                </div>
              </Fade>
              <div className="exp-tech-name">
                <Fade direction='up' triggerOnce><p>{eachLogo.name}</p></Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isMobile && (
        <div className="exp-list-part2">
          <div className="exp-date">
            <Fade direction='up' triggerOnce><p className='bold'>{role.year}</p></Fade>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  let { mode } = useContext(AppContext)

  return (
    <div className='exp-container' id='experience'>
      <div className="exp-part">
        <div className="exp-part1-name">
          <Fade direction='up' triggerOnce><h1>Experience</h1></Fade>
        </div>
        {expData.map((companyEntry, companyIdx) => (
          <div
            className={`exp-company-block ${companyEntry.roles.length > 1 ? 'exp-company-block--multi' : ''}`}
            key={companyIdx}
          >
            {companyEntry.roles.map((role, roleIdx) => (
              <ExperienceRole
                key={`${companyIdx}-${roleIdx}`}
                role={role}
                company={companyEntry.company}
                isMobile={isMobile}
                mode={mode}
                showConnector={roleIdx > 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
