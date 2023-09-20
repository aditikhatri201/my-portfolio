import React, { Component } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './style.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div id = "contact">
        <div className='touch'>Get In Touch</div>
        <form className='textarea'>
          <input type="text" placeholder='Your Name'/><br/>
          <input type = "email" placeholder='Your Email'/><br/>
          <input type="tel" placeholder='Your Phone Number' /><br/>
          <textarea  type = "text" placeholder='Your Address' ></textarea ><br/>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className='icons'>
        <a className='gmail' href = "mailto:aditikhatri1999@gmail.com"><SiGmail/></a>
        <a className='linkedin' href = "https://www.linkedin.com/in/aditikhatri702/"><FaLinkedin/></a>
        <a className='instagram' href = "https://www.instagram.com/aditi.khatri12/?igshid=MzMyNGUyNmU2YQ%3D%3D"><FaInstagram/></a>
        <a className='gihub' href = "https://github.com/aditikhatri201"><FaGithub/></a>
      </div>
      </div>
    )
  }
}
