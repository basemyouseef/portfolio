import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3k7vhgr',
      'template_wz0d9q4',
      form.current,
      { publicKey: 'eNsfDjsabiEC8Pfau' }
    )
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      })
  };
  

  const contactData = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      title: "Email",
      info: "basemyousef404@gmail.com",
      link: "mailto:basemyousef404@gmail.com",
    },
    {
      id: 2,
      title: "Messenger",
      icon: <RiMessengerLine />,
      info: "Basem Yousef",
      link: "",
    },
    {
      id: 3,
      icon: <BsWhatsapp />,
      title: "Whatsapp",
      info: "+966565876362",
      link: "https://wa.me/966565876362",
    },
  ];

  return (
    <section className="contact" id="Contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2 className="main_title">Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option_artical">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">Send Message</a>
            </article>
          ))}
        </div>

        <form ref={form}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea rows={12} name="message" placeholder="Enter Your Message"></textarea>
          <button className="btn btn-primary" onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
