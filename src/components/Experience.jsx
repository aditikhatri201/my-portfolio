import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div id = "experience">
        <div className='Education'>
          <h2>Education</h2>
          <div className='Education1'>
            <h4>Birla Institute of Technology - Mesra</h4>
            <p>2019-2023</p>
            <p><b>Bachelor of Technology in Information Technology</b></p>
          </div>
          <div className='Education2'>
            <h4>Gyan Jyoti Residential Public School</h4>
            <p>2017-2018</p>
            <p><b>Class 12 - PCM</b></p>
          </div>
          <div className='Education3'>
            <h4>DAV Public School</h4>
            <p>2015-2016</p>
            <p><b>Class 10</b></p>
          </div>
        </div>
        <div className='Experience'>
        <h2>Experience</h2>
        <div className='Experience1'>
            <h4>Amazon</h4>
            <p>January 2023- June 2023</p>
            <p><b>SDE Intern</b></p>
          </div>
          <div className='Experience2'>
            <h4>Walkover</h4>
            <p>December 2021-February 2022</p>
            <p><b>Software Trainee</b></p>
          </div>
          <div className='Experience3'>
            <h4>Microsoft</h4>
            <p>May 2021-June 2021</p>
            <p><b>Mentee</b></p>
          </div>
        </div>
      </div>
    )
  }
}
