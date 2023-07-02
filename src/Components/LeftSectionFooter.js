import React from 'react'
import "./LeftF.css"
function LeftSectionFooter() {
    let links=["Prompt Generator"," Dweep Daily","All Contributors","Your data on Dweep.io","Contribute to Dweep"]
     
  return (
    <div className='LeftF'>
     {links.map((LinkName)=>( <li>{LinkName}</li>))}
    </div>
  )
}

export default LeftSectionFooter