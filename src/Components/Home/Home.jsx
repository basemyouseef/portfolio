import React from 'react'
import me from '../../assets/basem.png'
import './Home.css'
import cv from '../../assets/Basem_Youssef_FrontEnd_Developer.pdf'
import Socials from './Socials'
import { FaDownLong } from "react-icons/fa6";

function Home() {
  return (
    <div className='home'>
      <div className="container home-container">
        <h4>Hello  I’m</h4>
        <h1>Basem Yousef</h1>
        <h4 className='text-lighe'>Frontend Developer</h4>
        <div className='bttn'>
          <a href={cv} download className="btn">Download CV</a>
          <a href="#Contact" className="btn btn-primary" >Let ’s Touch</a>
        </div>
        
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="" className='down'><FaDownLong/></a>


        <Socials/>
      </div>
    </div>
  )
}

export default Home
