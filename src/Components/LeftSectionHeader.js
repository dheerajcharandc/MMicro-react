import React from 'react'
import Form from "./Form"

function LeftSectionHeader() {
  
  return (
    <div style={{marginLeft:"136px",marginTop:"40px"}}>
        <h1>An inspiring design delivered to <br></br>your inbox every morning</h1>
        <p style={{marginTop:"30px",letterSpacing:"1px" }}>Our team scouts the internet for the best designs,<br></br>
         illustrations and art and delivers a truly inspiring <br></br>one every day to your inbox</p>
       <Form/>
    </div>
  )
}

export default LeftSectionHeader