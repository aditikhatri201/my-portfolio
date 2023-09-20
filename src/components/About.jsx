import React, { Component } from 'react'
import profileImage from './img/aditi.png'

export default class About extends Component {
  render() {
    return (
      <div id = "about" className='about-Section'>
        <div className='img'>
          <img src={profileImage} alt=" Profile Image" width="400" height="400" />
        </div>
        <div>
        <div className='about'>
          <h1>About Me</h1>
          <p><b>I am available for Web development/Android Devlopment</b></p>
          <p>In 2019, I enrolled in BIT Mesra as a Computer Science, driven by my passion for computers.
          I am passionate about Software Devlopment and have a strong skill set to prove myself.
          </p>
        </div>
        <div className='table'>
          <div className='table1'>
            <table>
              <tr>
                <th>Name:</th>
                <td>Aditi Khatri</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>aditikhatri1999@gmail.com</td>
              </tr>
              <tr>
                <th>Birthday:</th>
                <td>10 January, 2001</td>
              </tr>
              <tr>
                <th>University:</th>
                <td>Birla Institude of Technology - Mesra</td>
              </tr>
            </table>
          </div>
          <div className='table2'>
            <table>
              <tr>
                <th>Degree:</th>
                <td>B.Tech</td>
              </tr>
              <tr>
                <th>Linkedin:</th>
                <td><a href = "https://www.linkedin.com/in/aditikhatri702/">aditikhatri702</a></td>
              </tr>
              <tr>
                <th>City:</th>
                <td>Patna, Bihar, India</td>
              </tr>
              <tr>
                <th>Freelancer:</th>
                <td>Available</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
