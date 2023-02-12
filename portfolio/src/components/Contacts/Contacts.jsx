import React from 'react'
import './contacts.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset ()

    emailjs.sendForm('service_5cu2ful', 'template_cwpxsfa', form.current, 'wYEAETNFy-tfb9rEB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contacts' onSubmit={sendEmail}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maxgithinji101@gmail.com</h5>
            <a href="mailto:maxgithinji101@gmail.com" target='_blank'> Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook messenger</h4>
            <h5>Disciplined Child</h5>
            <a href="https://m.facebook.com/100008189016762/" target='_blank'> Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp Messenger</h4>
            <h5>Maxwell Githinji</h5>
            <a href="https://api.whatsapp.com/send?phone+254795107488" target='_blank'> Send a message</a>
          </article>
        </div>

        <form ref={form}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='text' name='email' placeholder='Your Current E-mail' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contacts