import React, { useContext } from 'react'
import eduData from '../../data/education.js'
import { useMediaQuery } from 'react-responsive';
import { AppContext } from '../../Context/AppContext.jsx';
import './Education.css'

const Education = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  let { mode } = useContext(AppContext)
  
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
                  <h2 className='bold'>{eachData.name}</h2>
                </div>
                <h3 className='grey m-font bold'>{eachData.course}</h3>
                {isMobile ?
                  <div className="edu-date">
                    {<p className='bold s-font'>{eachData.year}</p>}
                  </div> :
                  (<></>)}
              </div>
              <div className="edu-tech-used">
                {
                  eachData.subjects.map((eachSubject, idx) => (
                    <div className='edu-tech-icon-name' key={idx}>
                      <div className={`edu-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
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
                  {<p className='bold'>{eachData.year}</p>}
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