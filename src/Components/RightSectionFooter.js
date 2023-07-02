import React from 'react'
import "./RightF.css"
import Linkedin from "../assets/LinkedinLogo (1).png"
import Insta from "../assets/InstagramLogo (1).png"
function RightSectionFooter() {
  
  return (
    <div className='RightF'>
      
      <li> Dweep.io</li> 
      <li>Made with love in India</li>
      <li><img src={Insta} alt="insta" height={"20.57px"} width={"22.05px"} ></img><img src={Linkedin} alt="lin" height={"20.57px"} width={"22.05px"}></img></li>
      <li className='mail'>hello@dweep.io</li>
      
    </div>
  )
}

export default RightSectionFooter