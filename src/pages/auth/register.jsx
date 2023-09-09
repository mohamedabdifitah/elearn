import axios from "axios";
import { base } from "../../api/request";
import "./index.css"
import { useState } from "react";
const Register = () => {
  const [errMsg , setErrMsg] = useState()
  async function handleCreate(e) {
    e.preventDefault();
    let username = e.target[0].value
    let email = e.target[1].value
    let password = e.target[2].value

    try {
      const response = await axios.post(base+"student/create",
        {
          username: username,
          email: email,
          password: password
        },
        {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true
          }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      // setUser('');
      // setPwd('');
      // setSuccess(true);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
      // errRef.current.focus();
    }
  }
  return (
    <div style={{position:"relative",width:"100%",height:"100vh",background:"rgb(0 0 0)",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"15px"}}>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form id="form" onSubmit={handleCreate}>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" id="username"/>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <input id="submit" type="submit" value={"register"}/>
        <br></br>
        {errMsg?<p style={{color:"red"}}>{errMsg}</p>:null}
    </form>
    </div>
  )
}

export default Register
