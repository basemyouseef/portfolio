import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";
import basem from '../../assets/basem.jpg'

function About() {
  return (
    <section className='about' id='about'>

      <div className="top_section">
        <h5>get to Know</h5>
        <h2 className='main_title'>About Me</h2>
      </div>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_image">
            <img src={basem} alt="me-about" />
          </div>

        </div>

        <div className="about_content">
          <div className="row">
            <div className="card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years</small>
            </div>

              <div className="card">
              <FiUser className='about_icon' />
              <h5>Education</h5>
              <small>Bachelor's Degree</small>
            </div>

                <div className="card">
              <VscFolder className='about_icon' />
              <h5>Projects</h5>
              <small>4+ completed</small>
            </div>
          </div>
          <p>
            Frontend Developer with 1+ year of experience creating modern, responsive web applications. B.Sc. in Computer Science with 4+ completed projects, focused on delivering clean and user‑friendly solutions.
          </p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
