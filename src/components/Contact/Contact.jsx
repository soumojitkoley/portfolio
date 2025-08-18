import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";
import contactData from '../../data/contact.js'
import './Contact.css'
import ContactForm from '../../form/ContactForm.jsx';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-name">
        <h1>Contact</h1>
      </div>
      <div className='contact-details'>
        <div className="contact-details-part1">
          <h2>Get In Touch</h2>
          {
            contactData.map((eachData, idx) => {
              const Icon = eachData.src
              return (
                <div className="each-contact-details">
                  <div className="each-contact-icon">
                    <Icon size={20} />
                  </div>
                  <div className="each-contact-links">
                    <p>{eachData.name}</p>
                    <p>{eachData.id}</p>
                  </div>
                </div>
              );

            })
          }
        </div>
        <div className="contact-details-part2">
          <div className="form-title">
            Send Me a Message
          </div>
          <div className="contact-form">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact