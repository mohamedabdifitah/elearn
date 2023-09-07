import { useState } from "react";
import "./index.css"
import { IconButton, Stack} from '@mui/material';
const LoginComponent = () => {
  const [ showPassword , setShowPassword] = useState(false)

  function handleLogin(e) {
    e.preventDefault();
    let email = e.target[0].value
    let password = e.target[1].value
    

  }
  return (
    <div style={{position:"relative",width:"100%",height:"100vh",background:"rgb(0 0 0)",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"15px"}}>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form id="form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <a href="/auth/forget/password">forgot password</a>
        <button>Log In</button>
    </form>
    </div>
  )
}

export default LoginComponent
