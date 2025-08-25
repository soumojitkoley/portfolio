import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import expData from '../../data/experience.js'
import { AppContext } from '../../Context/AppContext.jsx';
import { Fade } from "react-awesome-reveal";
import ReactRouterLogoWhite from '../../assets/stack/react-router-white.svg'
import './Experience.css'

const Experience = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  let { mode } = useContext(AppContext)

  return (
    <div className='exp-container' id='experience'>
      <div className="exp-part">
        <div className="exp-part1-name">
        <Fade direction='up' triggerOnce><h1>Experience</h1></Fade>
        </div>
        {expData.map((eachData, idx) => (
          <div className="exp-list" key={idx}>
            <div className="exp-list-part1">
              <div className="exp-title-company">
              <Fade direction='up' triggerOnce><h2 className='bold'>{eachData.title}</h2></Fade>
              <Fade direction='up' triggerOnce><h3 className='grey m-font bold'>{eachData.company}</h3></Fade>
                {isMobile ?
                  <div className="exp-date">
                    {<Fade direction='up' triggerOnce><p className='bold s-font'>{eachData.year}</p></Fade>}
                  </div> :
                  (<></>)}
              </div>
              <div className="exp-details s-font">
                <ul>
                  {
                    eachData.details.map((eachDetails, idx) => (
                      <Fade direction='up' triggerOnce><li key={idx}>{eachDetails}</li></Fade>
                    ))
                  }
                </ul>
              </div>
              <div className="exp-tech-used">
                {
                  eachData.tech.map((eachLogo, idx) => (
                    <div className='exp-tech-icon-name' key={idx}>
                      <Fade direction='up' triggerOnce>
                        <div className={`exp-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                        <img src={mode && eachLogo.name === "React Router" ? ReactRouterLogoWhite : eachLogo.src} alt={eachLogo.name}/>
                        </div>
                      </Fade>

                      <div className="exp-tech-name">
                        <Fade direction='up' triggerOnce><p>{eachLogo.name}</p></Fade>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="exp-list-part2">
              {!isMobile ?
                <div className="exp-date">
                  <Fade direction='up' triggerOnce>{<p className='bold'>{eachData.year}</p>}</Fade>
                </div> :
                (<></>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience