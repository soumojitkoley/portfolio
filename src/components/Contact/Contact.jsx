import React, { useContext } from 'react'
import contactData from '../../data/contact.js'
import ContactForm from '../../form/ContactForm.jsx';
import './Contact.css'
import { AppContext } from '../../Context/AppContext.jsx';

const Contact = () => {

  let {mode} = useContext(AppContext)

  return (
    <div className='contact-container' id='contact'>
      <div className="contact-name">
        <h1>Contact</h1>
      </div>
      <div className='contact-details'>
        <div className="contact-details-part1">
          <h2 className='bold'>Get In Touch</h2>
          {
            contactData.map((eachData, idx) => {
              const Icon = eachData.src
              return (
                <div className="each-contact-details">
                  <div className={`each-contact-icon ${mode ? 'white-icon' : 'dark-icon'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="each-contact-links">
                    <p className='bold s-font grey'>{eachData.name}</p>
                    <p className='bold'>{eachData.id}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="contact-details-part2">
          <div className="form-title">
            <h2 className='bold'>Send Me a Message</h2>
          </div>
          <div className="contact-form-container">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact