import React, { useContext } from 'react'
import eduData from '../../data/education.js'
import { useMediaQuery } from 'react-responsive';
import { AppContext } from '../../Context/AppContext.jsx';
import { Fade } from "react-awesome-reveal";
import './Education.css'

const Education = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  let { mode } = useContext(AppContext)
  
  return (
    <div className='edu-container' id='education'>
      <div className="edu-part">
        <div className="edu-part1-name">
          <Fade direction='up' triggerOnce><h1>Education</h1></Fade>
        </div>
        {eduData.map((eachData, idx) => (
          <div className="edu-list" key={idx}>
            <div className="edu-list-part1">
              <div className="edu-title-company">
                <div className='edu-logo-name'>
                <Fade direction='up' triggerOnce>
                  <div className="edu-logo">
                    <img src={eachData.src} alt="" />
                  </div>
                  </Fade>
                  <Fade direction='up' triggerOnce><h2 className='bold l-font'>{eachData.name}</h2></Fade>
                </div>
                <Fade direction='up' triggerOnce><h3 className='grey m-font bold'>{eachData.course}</h3></Fade>
                {isMobile ?
                  <div className="edu-date">
                    <Fade direction='up' triggerOnce>{<p className='bold s-font'>{eachData.year}</p>}</Fade>
                  </div> :
                  (<></>)}
              </div>
              <div className="edu-tech-used">
                {
                  eachData.subjects.map((eachSubject, idx) => (
                    <div className='edu-tech-icon-name' key={idx}>
                      <Fade direction='up' triggerOnce>
                      <div className={`edu-tech-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                        <img src={eachSubject.src} alt="" />
                      </div>
                      </Fade>
                      <div className="edu-tech-name">
                        <Fade direction='up' triggerOnce><p>{eachSubject.name}</p></Fade>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="edu-list-part2">
              {!isMobile ?
                <div className="edu-date">
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

export default Education