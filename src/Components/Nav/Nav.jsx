import React from 'react'
import './Nav.css'
import{IoHomeOutline} from 'react-icons/io5';
import{LuUserRound} from 'react-icons/lu';
import{BiBook} from 'react-icons/bi';
import{RiServiceLine} from 'react-icons/ri';
import{BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';
function Nav() {
  const[activeNave,setactiveNave]=useState("#")

  return (

    <nav >
      <a href="#" className={activeNave ==="#" ? "active" : ""} onClick={()=>setactiveNave("#")}><IoHomeOutline /></a>
      <a href="#about" className={activeNave ==="#about" ? "active" : ""} onClick={()=>setactiveNave("#about")}><LuUserRound /></a>
      <a href="#services" className={activeNave ==="#services" ? "active" : ""} onClick={()=>setactiveNave("#services")}><BiBook /></a>
      <a href="#porjectes" className={activeNave ==="#porjectes" ? "active" : ""} onClick={()=>setactiveNave("#porjectes")}><RiServiceLine /></a>
      <a href="#Contact" className={activeNave ==="#Contact" ? "active" : ""} onClick={()=>setactiveNave("#Contact")}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
