import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function Socials() {
  return (
    <div className='Social_icons'>
      <a href="https://www.linkedin.com/in/bassem-yousef-6567a8393/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://github.com/basemyouseef" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://www.facebook.com/basem.yousef.5243" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>

      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
        <MdOutgoingMail />
      </a>

      <a href="https://wa.me/966565876362" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
    </div>
  )
}

export default Socials
