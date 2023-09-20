import React, { Component } from 'react'
import {IoLogoChrome,IoLogoAndroid} from "react-icons/io"
import {BiLogoJava, BiLogoCPlusPlus} from "react-icons/bi"

export default class Services extends Component {
  render() {
    return (
      <div id = "services">
        <h2>My Service</h2>
        <div className='services1'>
            <div>
              <p><IoLogoChrome className='logo-color'/><b>Web Development</b> </p>
              <p><IoLogoAndroid className='logo-color'/> <b>Android Development</b></p>
            </div>
        </div>
        <div className='services2'>
          <div>
          <p><BiLogoJava className='logo-color'/><b>Java Development</b></p>
      
          <p><BiLogoCPlusPlus className='logo-color'/><b>C++ Development</b></p>
          </div>
              
              
        </div>
      </div>
    )
  }
}
