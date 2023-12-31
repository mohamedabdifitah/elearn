import axios from "axios";
import "./index.css"
import { base } from "../../api/request";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [errMsg , setErrMsg] = useState()
  const navigate = useNavigate()
  // const [res ,setRes] = useState()
  async function handleForget(e){
    e.preventDefault()
    let email = e.target[0].value
    try {
      const response = await axios.post(base+"student/forget/password",
        {
          email: email,
        },
        {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true
          }
      );
      if(response.status == 200){
        navigate("/auth/login");
      }
      console.log(response)
    }catch(err){
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('email is not found');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
    }

  }
  return (
    <div style={{position:"relative",width:"100%",height:"100vh",background:"rgb(0 0 0)",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"15px"}}>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form id="form" onSubmit={handleForget}>
        <h3>Forget Password</h3>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"/>
        <input id="submit" type="submit" value={"send"}/>
        <br></br>
        {errMsg?<p style={{color:"red"}}>{errMsg}</p>:null}
    </form>
    </div>
  )
}

export default ChangePassword
