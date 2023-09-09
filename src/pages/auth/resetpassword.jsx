import React, { useState } from "react";
import "./index.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { base } from "../../api/request";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const ResetPassword = () => {
  var query = useQuery()
  var token = query.get("token")
  const [errMsg , setErrMsg] = useState()
  const navigate = useNavigate()

  async function handleForget(e){
    e.preventDefault()
    var password = e.target[0].value
    try {
      const response = await axios.post(base+"student/reset/password",
        {
          password:password,
          token:token
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
          setErrMsg(err.response?.data);
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
        <h3>Reset Password</h3>
        <label htmlFor="passwor">Password</label>
        <input type="password" placeholder="type password" id="password"/>
        <label htmlFor="email">Retype password</label>
        <input type="password" placeholder="retype password" id="password"/>
        <input id="submit" type="submit" value={"change"}/>
        <br></br>
        {errMsg?<p style={{color:"red"}}>{errMsg}</p>:null}
    </form>
    </div>
  )
}

export default ResetPassword
