import { useLocation } from "react-router-dom"
import React, { useContext } from "react";

import { useEffect, useState } from 'react';
import CourseWidget from '../../widgets/course'
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
import { base} from '../../api/request';
import axios from 'axios';
import AuthContext from "../../context/authprovider";

const SearchCourses = () => {
  const { search } = useContext(AuthContext);
  // const query = useQuery()
  // var text = query.get("text")
  const [ courses ,setCourses] = useState([])
  const [loading,setLoading ] = useState(true);
  useEffect(() =>{

    function getCourse(){
      
      axios.get(base+"course/search?text="+search)
      .then(res =>{
        console.log(res.data);
        setCourses(res.data)
        setLoading(false)
      }).catch(err =>{
        console.log(err)
      })
    }
    getCourse()
  },[search])
  const navigate = useNavigate()
  if (loading){
    return (

        <div className='panel'>
        <div style={{padding:"0px 9px 10px 9px",display:"grid"}}>
          <div style={{ gridColumn:1 }}>

          {loading?<Skeleton
                animation="wave"
                height={27}
                width="40%"
              
              />:<h1 >
            Search {search}
          </h1>}
          {loading?<Skeleton
                animation="wave"
                height={10}
                width="40%"
                
                
                />:<p >Take one of Elearn’s range of Python courses and learn how to code using this incredibly useful language</p>}
          </div>
          {/* <div style={{display:"flex",justifyContent:"end",gridColumn:2,gridRow:1}}>
            {loading?<Skeleton variant="circular" width={50} height={40} />:<IconButton onClick={()=>{navigate("courses/group/44")}}><BsFillArrowRightCircleFill /></IconButton>}
          </div> */}
        </div>
        <div style={{display:"flex",position:"relative",padding:"0px 5px",gap: "10px"}}>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>      
          
        </div>
      </div>
    )
  }
  return (
    <div className='panel'>
      <div style={{padding:"0px 9px 10px 9px",display:"grid"}}>
        <div style={{ gridColumn:1 }}>

        {loading?<Skeleton
              animation="wave"
              height={27}
              width="40%"
            
            />:<h1 >
          Searched {search} 
        </h1>}
        {loading?<Skeleton
              animation="wave"
              height={10}
              width="40%"
              
              
              />:<p >Take one of Elearn’s range of Python courses and learn how to code using this incredibly useful language</p>}
        </div>
        {/* <div style={{display:"flex",justifyContent:"end",gridColumn:2,gridRow:1}}>
          {loading?<Skeleton variant="circular" width={50} height={40} />:<IconButton onClick={()=>{navigate("courses/group/44")}}><BsFillArrowRightCircleFill /></IconButton>}
        </div> */}
      </div>
      <div style={{display:"flex",position:"relative",padding:"0px 5px",gap: "10px"}}>
        {courses?.map((course) =>{
            // eslint-disable-next-line react/jsx-key
            return <CourseWidget loading={loading} title={course.title} thumbnail={course.thumbnail} id={course.id}/>
          })

        }
      </div>
    </div>
  )
}

export default SearchCourses
