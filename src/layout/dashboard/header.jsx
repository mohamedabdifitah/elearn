import { Avatar, Button } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const SearchHandler = (e ) =>{
    e.preventDefault();
    let search = e.target[0].value
    navigate("courses/search/"+search)
  }
  return (
    <header>
      <div className="dashboard-header">
        <img style={{visibility:"hidden" }} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
        <div>

        </div>
        <div className="search-holder">
          <div style={{width:"40px", position:"relative",alignItems:"center",display:"flex"}}>
            <AiOutlineSearch />
            
          </div>
          <form  onSubmit={SearchHandler}  className="searchform" style={{position:"relative",width:"90%"}}>
            
            <input type="text" style={{fontSize:"17px",fontFamily:"var(--font-stack-text)"}}/>
          </form>
          
        </div>

        {!true?<div style={{display:"flex",width:"170px",justifyContent:"space-between",height:"40px",flexDirection:"row"}}>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Signup</Button>

        </div>:
        <Avatar src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg" />
        }
      </div>
      
    </header>
  )
}

export default Header