import React, { Component } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default class Home extends Component {
  render() {
    return (
      <div id = "home" className='home'>
        <div>
        <h1 className='name'>Aditi<span>Khatri</span></h1>
        <p>I'm a passionate Developer from India.</p>
        <div className='home-icons'>
          <a className='gmail' href = "mailto:aditikhatri1999@gmail.com"><SiGmail/></a>
          <a className='linkedin' href = "https://www.linkedin.com/in/aditikhatri702/"><FaLinkedin/></a>
          <a className='instagram' href = "https://www.instagram.com/aditi.khatri12/?igshid=MzMyNGUyNmU2YQ%3D%3D"><FaInstagram/></a>
          <a className='gihub' href = "https://github.com/aditikhatri201"><FaGithub/></a>
        </div>
        </div>
        
      </div>
    )
  }
}

