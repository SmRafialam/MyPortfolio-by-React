import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = 'zztvKqK_CCiXwKN0L';
  
    // emailjs.sendForm('service_1fn07mr', 'template_r4nzs3h', form.current, {
    //   publicKey: publicKey,
    // }).then((result) => {
    //   console.log(result.text);
    //   alert("Email Sent");
    // }).catch((error) => {
    //   console.log(error.text);
    //   alert("Error sending email. Please try again later.");
    // });

    emailjs.sendForm('service_1fn07mr', 'template_r4nzs3h', e.target, publicKey).then((result) => {
      console.log(result.text);
      alert("Email Sent");
    }).catch((error) => {
      console.log(error.text);
      alert("Error sending email. Please try again later.");
    });
  
    e.target.reset();
  }
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='email'>smrafialam007@gmail.com</h5>
            <a href="mailto:smrafialam007@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>messenger</h4>
            <h5>SmRafiAlam</h5>
            <a href="https://m.me/innocent.rafi.5">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+8801792207880</h5>
            <a href="https://api.whatsapp.comsend?phone+8801792207880" >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact