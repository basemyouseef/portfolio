import React from 'react'
import './Skills.css'
import LogoLoop from './LogoLoop';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub ,FaTiktok,FaSnapchatGhost
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiRedux, SiTypescript, SiNextdotjs } from "react-icons/si";

const logos = [
  { node: <FaHtml5 size={40} color="#E34F26" />, title: "HTML" },
  { node: <FaCss3Alt size={40} color="#1572B6" />, title: "CSS" },
  { node: <FaJs size={40} color="#F7DF1E" />, title: "JavaScript" },
  { node: <FaReact size={40} color="#61DAFB" />, title: "React" },
  { node: <SiRedux size={40} color="#764ABC" />, title: "Redux" },
  { node: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript" },
  { node: <SiTailwindcss size={40} color="#38BDF8" />, title: "Tailwind CSS" },
  { node: <SiVite size={40} color="#646CFF" />, title: "Vite" },
  { node: <SiNextdotjs size={40} color="#000000" />, title: "Next.js" },
  { node: <FaGitAlt size={40} color="#F05032" />, title: "Git" },
  { node: <FaGithub size={40} color="#181717" />, title: "GitHub" },
  { node: <FaTiktok size={40} color="#000000" />, title: "TikTok" },
  { node: <FaSnapchatGhost size={40} color="#FFFC00" />, title: "Snapchat" }
];
const dataskills = [
  {id:1, title: "HTML",disc:"structure web content", icon: <FaHtml5 size={40} color="#E34F26"  /> },
  {id:2, title: "CSS",disc:"user inter face", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  {id:3, title: "JavaScript",disc:"make web inter action", icon: <FaJs size={40} color="#F7DF1E" /> },
  {id:4, title: "React",disc:"framework", icon: <FaReact size={40} color="#61DAFB" /> },
  {id:5, title: "Redux",disc:"mange app state", icon: <SiRedux size={40} color="#764ABC" /> },
  {id:6, title: "TypeScript",disc:"javaScript with types", icon: <SiTypescript size={40} color="#3178C6" /> },
  {id:7, title: "Tailwind CSS",disc:"frist css framework", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
  {id:8, title: "GitHub",disc:"code hosting platform", icon: <FaGithub size={40} color="#181717" /> },
  {id:9, title: "TikTok",disc:"social media platform", icon: <FaTiktok size={40} color="#000000" /> },
  {id:10, title: "Snapchat",disc:"social media platform", icon: <FaSnapchatGhost size={40} color="#FFFC00" /> },
];

function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className="top_section">
        <h5>My Skills</h5>
        <h2 className='main_title'>My Experience</h2>
      </div>
      <div className="my-skills">
    {dataskills.map(({id,title,icon,disc})=>(
        
      <div className="container container-skills">
        <article key={id} className='card-skills'>

          <div className="icon">
            {icon}
          </div>

          <div className="content">
            <h4>{title}</h4>
            <p>{disc}</p>
          </div>
        </article>
      </div>

      ))}
      </div>
  

     <LogoLoop
     logos={logos}
  direction="left"
  logoHeight={1}
  gap={32}
  pauseOnHover
  scaleOnHover
            />
      
    </div>
  )
}

export default Skills
