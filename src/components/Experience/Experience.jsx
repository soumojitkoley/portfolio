import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import expData from '../../data/experience.js'
import { AppContext } from '../../Context/AppContext.jsx';
import './Experience.css'

const Experience = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  let { mode } = useContext(AppContext)

  return (
    <div className='exp-container' id='experience'>
      <div className="exp-part">
        <div className="exp-part1-name">
          <h1>Experience</h1>
        </div>
        {expData.map((eachData, idx) => (
          <div className="exp-list" key={idx}>
            <div className="exp-list-part1">
              <div className="exp-title-company">
                <h2>{eachData.title}</h2>
                <h3 className='grey m-font'>{eachData.company}</h3>
                {isMobile ?
                  <div className="exp-date">
                    {<p>{eachData.year}</p>}
                  </div> :
                  (<></>)}
              </div>
              <div className="exp-details s-font">
                <ul>
                  {
                    eachData.details.map((eachDetails, idx) => (
                      <li key={idx}>{eachDetails}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="exp-tech-used">
                {
                  eachData.tech.map((eachLogo, idx) => (
                    <div className='exp-tech-icon-name' key={idx}>
                      <div className={`exp-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                        <img src={eachLogo.src} alt="" />
                      </div>

                      <div className="exp-tech-name">
                        <p>{eachLogo.name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="exp-list-part2">
              {!isMobile ?
                <div className="exp-date">
                  {<p>{eachData.year}</p>}
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