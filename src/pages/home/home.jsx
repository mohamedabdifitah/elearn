import { useContext } from "react";
import AuthContext from "../../context/authprovider";
import Suggestion from "./components/most"
import SearchCourses from "../course/search";

const Home = () => {
  const { search } = useContext(AuthContext);
  return (
    <div style={{padding:"5px 2px",display:"flex",justifyContent:"space-between",flexDirection:"column",gap: "20px"}}>
      {!search?
        <Suggestion />:
        <SearchCourses />
      }
    </div>
  )
}

export default Home