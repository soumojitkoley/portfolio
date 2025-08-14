import React from 'react'
import eduData from '../../data/education.js'
import { useMediaQuery } from 'react-responsive';
import './Education.css'

const Education = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='edu-container' id='education'>
      <div className="edu-part">
        <div className="edu-part1-name">
          <h1>Education</h1>
        </div>
        {eduData.map((eachData, idx) => (
          <div className="edu-list" key={idx}>
            <div className="edu-list-part1">
              <div className="edu-title-company">
                <div className='edu-logo-name'>
                  <div className="edu-logo">
                    <img src={eachData.src} alt="" />
                  </div>
                  <h2>{eachData.name}</h2>
                </div>
                <h3 className='grey m-font'>{eachData.course}</h3>
                {isMobile ?
                  <div className="edu-date">
                    {<p>{eachData.year}</p>}
                  </div> :
                  (<></>)}
              </div>
              <div className="edu-tech-used">
                {
                  eachData.subjects.map((eachSubject, idx) => (
                    <div className='edu-tech-icon-name' key={idx}>
                      <div className="edu-tech-icon">
                        <img src={eachSubject.src} alt="" />
                      </div>

                      <div className="edu-tech-name">
                        <p>{eachSubject.name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="edu-list-part2">
              {!isMobile ?
                <div className="edu-date">
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

export default Education