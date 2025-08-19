import React, { useRef, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FcApproval } from "react-icons/fc";
import { AppContext } from '../Context/AppContext.jsx';
import './ContactForm.css';

const ContactForm = () => {
  let { mode } = useContext(AppContext);
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_CONTACT_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Form Submitted Successfully!');
          setFormSubmitted(true);
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Something went wrong");
          console.log('FAILED...', error.text);
        }
      );
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className={`contact-form ${mode ? "light" : "dark"}`}>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-name-part">
          <input className="input" type="text" name="user_first_name" placeholder="First Name" required />
          <input className="input" type="text" name="user_last_name" placeholder="Last Name" required />
        </div>
        <div className="form-email-part">
          <input className="input" type="email" name="user_email" placeholder="Email Address" required />
        </div>
        <div className="form-msg-part">
          <textarea name="message" className="input" placeholder="Type your message here" required />
        </div>
        <button className={`submit ${formSubmitted ? 'cf-disabled' : ''}`} disabled={formSubmitted}>
          {formSubmitted ? (
            <div className='form-msg-true'>
              Form Submitted <FcApproval />
            </div>
          ) : (
            'Submit Form'
          )}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
