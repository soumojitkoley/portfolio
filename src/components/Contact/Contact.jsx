import React, { useContext } from 'react'
import contactData from '../../data/contact.js'
import ContactForm from '../../form/ContactForm.jsx';
import { AppContext } from '../../Context/AppContext.jsx';
import { Fade } from "react-awesome-reveal";
import './Contact.css'

const Contact = () => {

  let { mode } = useContext(AppContext)

  return (
    <div className='contact-container' id='contact'>
      <div className="contact-name">
        <Fade direction='up' triggerOnce><h1>Contact</h1></Fade>
      </div>
      <div className='contact-details'>
        <div className="contact-details-part1">
          <Fade direction='up' triggerOnce><h2 className='bold'>Get In Touch</h2></Fade>
          {
            contactData.map((eachData, idx) => {
              const Icon = eachData.src
              return (
                <div className="each-contact-details" key={idx}>
                  <Fade direction='up' triggerOnce>
                    <div className={`each-contact-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                      <Icon size={20} />
                    </div>
                  </Fade>
                  <div className="each-contact-links">
                    <Fade direction='up' triggerOnce><p className='bold s-font grey'>{eachData.name}</p></Fade>
                    <Fade direction='up' triggerOnce><a href={eachData.href} target='_blank' className='bold'>{eachData.id}</a></Fade>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="contact-details-part2">
          <div className="form-title">
            <Fade direction='up' triggerOnce><h2 className='bold'>Send Me a Message</h2></Fade>
          </div>
          <div className={`contact-form-container ${mode ? 'white-theme' : 'black-theme'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact