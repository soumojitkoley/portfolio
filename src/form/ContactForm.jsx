import React, { useRef, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { MdDone } from "react-icons/md";
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
      toast.error('Please enter a valid email address.');
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
  
  return (
    <div className={`contact-form ${mode ? "light" : "dark"}`}>
      <form className="form" ref={form} onSubmit={sendEmail}>
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
        <button className={`submit ${formSubmitted ? 'cf-disabled' : ''}`} disabled={formSubmitted}>
          {formSubmitted ? (
            <div className={`form-msg-true bold ${mode ? 'form-msg-true-white' : ''}`}>
              Form Submitted <MdDone size={20} />
            </div>
          ) : (
            'Submit Form'
          )}
        </button>
      </form>
      {/* message sent part will apper here */}
    </div>
  );
};

export default ContactForm;
