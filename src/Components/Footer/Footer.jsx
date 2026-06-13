import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
function Footer() {
  return (
    <footer>
      <a href="" className='Footer_logo'>Basem Yousef</a>
      <ul className='MyLink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Servics">Servics</a></li>
        <li><a href="#porjectes">Projectes</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    <div className='Footer_socials'>
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
    </div>
    <div className="copyright">
      <small>&copy; <a href="">Basem Yousef</a> All Rights Services </small>
    </div>
    </footer>
  )
}

export default Footer
