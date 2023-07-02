import React from 'react'
import "./Form.css"
import { useState } from 'react'
function Form() {
  // const[email,SetEmail]=useState("")
  // const[IsRegistered,SetIsRegisterd]=useState(false)
  const [info, setInfo] = useState(false)
    const [mail, setMail] = useState("")
    function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
    const handleRegister=(e)=>{
        e.preventDefault()
        if(isValidEmail( mail)){
            setInfo(true)
        }else{
            alert("please provide a valid mail")
            setInfo(false)
        }
    }

    const handleChange=(e)=>{
        setMail(e.target.value)
    }
  return (
    <div className="Form">
       {info?<h1>Thank you!</h1>:<>
        <h4>Show me how it looks</h4>
        <input type="email" className='maiil'value={mail} placeholder='Your e-mail address' required onChange={handleChange} ></input>
        <button onClick={handleRegister} className='button'>Register Now</button>
        </>}
    </div>
  )
}

export default Form