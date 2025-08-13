import React from 'react'
import { useMediaQuery } from 'react-responsive';
import expData from '../../data/experience.js'
import './Experience.css'

const Experience = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='exp-container' id='experience'>
      <div className="exp-part">
        <div className="exp-part1-name">
          <h1>Experience</h1>
        </div>
        {expData.map((eachData, idx) => (
          <div className="job-list" key={idx}>
            <div className="job-list-part1">
              <div className="job-title-company">
                <h2>{eachData.title}</h2>
                <h3>{eachData.company}</h3>
                {isMobile ?
                  <div className="job-date">
                    {<p>{eachData.year}</p>}
                  </div> :
                  (<></>)}
              </div>
              <div className="job-details">
                <ul>
                  {
                    eachData.details.map((eachDetails, idx) => (
                      <li key={idx}>{eachDetails}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="job-tech-used">
                {
                  eachData.tech.map((eachLogo, idx) => (
                    <div className='job-tech-icon-name' key={idx}>
                      <div className="job-tech-icon">
                        <img src={eachLogo.src} alt="" />
                      </div>

                      <div className="job-tech-name">
                        <p>{eachLogo.name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="job-list-part2">
              {!isMobile ?
                <div className="job-date">
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