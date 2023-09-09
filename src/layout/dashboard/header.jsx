import { Avatar, Button } from "@mui/material"
import { useContext } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/authprovider"
const Header = () => {
  // const navigate = useNavigate()
  const { setSearch,search,auth} = useContext(AuthContext);
  const SearchHandler = (e ) =>{
    e.preventDefault();
    let search = e.target.value
    setSearch(search)
    // navigate("/courses/search?text="+search)
  }
  return (
    <header>
      <div className="dashboard-header">
        <img  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>
        <div>

        </div>
        <div className="search-holder">
          <div style={{width:"40px", position:"relative",alignItems:"center",display:"flex"}}>
            <AiOutlineSearch />
            
          </div>
          <div    className="searchform" style={{position:"relative",width:"90%"}}>
            
            <input value={search} onChange={(e) =>{
              e.preventDefault()
              setSearch(e.target.value)
            }} type="text" style={{fontSize:"17px",fontFamily:"var(--font-stack-text)"}}/>
          </div>
          
        </div>

        
        <Avatar />
        {/* } */}
      </div>
      
    </header>
  )
}

export default Header