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
        <img  src="https://dcassetcdn.com/design_img/673809/440505/440505_4205864_673809_image.png" alt="Udemy" width="91" height="34" loading="lazy"></img>
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