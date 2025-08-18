import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FcApproval } from "react-icons/fc";
import './ContactForm.css';

const ContactForm = () => {

  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setErrorMessage('');

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_CONTACT_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Form Submitted Successfully!')
          setFormSubmitted(true)
          console.log('SUCCESS!')
        },
        (error) => {
          toast.error("Something went wrong")
          console.log('FAILED...', error.text);
        }
      );
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const notify = () => toast.success('Form Submitted Successfully!');

  return (
    <div className='contact-form-container'>
      <form action="" class="form" ref={form} onSubmit={sendEmail}>
      <input class="input" type="text" name="user_first_name" placeholder="" required />
      <input class="input" type="text" name="user_last_name" placeholder="" required />
      <input class="input" type="email" name="user_email" placeholder="" required />
      <textarea name="message" class="input" type="email" placeholder="" required />

      <button class={`submit ${formSubmitted ? 'cf-disabled' : ''}`} value="Send" disabled={formSubmitted}>
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
  )
}

export default ContactForm