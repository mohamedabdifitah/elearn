import { useState , useContext} from "react";
import "./index.css"
import { IconButton, Stack} from '@mui/material';
import axios from "axios";
import { base } from "../../api/request";
import AuthContext from "../../context/authprovider";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const LoginComponent = () => {
  const [ showPassword , setShowPassword] = useState(false)
  const { setAuth } = useContext(AuthContext);
  const [errMsg , setErrMsg] = useState()
  const navigate = useNavigate()
  async function handleLogin(e) {
    e.preventDefault();
    let email = e.target[0].value
    let password = e.target[1].value
    try {
      const response = await axios.post(base+"student/login",
        {
          email: email,
          password: password
        },
        {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true
          }
      );
      const accessToken = response?.data?.access_token;
      // console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      setAuth(accessToken)
      navigate("/")
      Cookies.set("auth",accessToken,{ expires: 30 })
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
    <form id="form" onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <div style={{position:"relative",display:"flex",width:"100%",gap:"200px",top:"15px"}}>
          <a style={{alignSelf:"end"}} href="/auth/register">register</a>
          <a href="/auth/forget/password">forgot password</a>

        </div>
        <input id="submit" type="submit" value={"Log In"}/>
        <br></br>
        {errMsg?<p style={{color:"red"}}>{errMsg}</p>:null}
    </form>
    </div>
  )
}

export default LoginComponent
