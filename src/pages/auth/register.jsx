import "./index.css"
const Register = () => {
  return (
    <div style={{position:"relative",width:"100%",height:"100vh",background:"rgb(0 0 0)",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"15px"}}>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form id="form">
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Sign Up</button>
    </form>
    </div>
  )
}

export default Register
