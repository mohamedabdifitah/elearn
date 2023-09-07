import "./index.css"
const ChangePassword = () => {
  return (
    <div style={{position:"relative",width:"100%",height:"100vh",background:"rgb(0 0 0)",alignItems:"center",display:"flex",flexDirection:"column",paddingTop:"15px"}}>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form id="form">
        <h3>Forget Password</h3>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"/>
        <button>Forget</button>
    </form>
    </div>
  )
}

export default ChangePassword
