import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import sentLogo from '../assets/icons/check.png'
import { AppContext } from '../Context/AppContext.jsx';
import './ContactForm.css';
import { Fade } from 'react-awesome-reveal';

const ContactForm = () => {
  let { mode } = useContext(AppContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [againFormSubmit, setAgainFormSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;


    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_CONTACT_TEMPLATE_ID, e.target, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Form Submitted Successfully!');
          setFormSubmitted(!formSubmitted)
          setAgainFormSubmit(!againFormSubmit)
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };

  const validateEmail = (email) => { 
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    return regex.test(email); 
  };

  function againFormSubmitHandler() {
    setFormSubmitted(!formSubmitted)
    setAgainFormSubmit(!againFormSubmit)
  }

  return (
    <div className={`contact-form ${mode ? "light" : "dark"}`}>
      {(!formSubmitted && !againFormSubmit) ?
        (
          <Fade triggerOnce>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-name-part">
                <input className="input bold s-font" type="text" name="user_first_name" placeholder="Your first name" required />
                <input className="input bold s-font" type="text" name="user_last_name" placeholder="Your last name" required />
              </div>
              <div className="form-email-part">
                <input className="input bold s-font" type="email" name="user_email" placeholder="Your email address" required />
              </div>
              <div className="form-msg-part">
                <textarea name="message" className="input bold s-font" placeholder="Type your message here" required />
              </div>
              <button className={`submit`} >
                Submit Form
              </button>
            </form>
          </Fade>
        ) :
        (
          <Fade delay={300}>
            <div className={`form-submit-container ${mode ? 'form-submit-container-white' : ''}`}>
              <img src={sentLogo} alt="mail-sent-logo" />
              <p className='bold l-font'>Message Sent Successfully!</p>
              <p className='bold m-font grey'>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={againFormSubmitHandler}>Send another message</button>
            </div>
          </Fade>
        )}

    </div>
  );
};

export default ContactForm;
