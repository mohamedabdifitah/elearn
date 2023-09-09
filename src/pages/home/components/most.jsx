/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import CourseWidget from '../../../widgets/course'
import Skeleton from '@mui/material/Skeleton';
import { IconButton } from '@mui/material';
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { base } from '../../../api/request';
import axios from 'axios';
const Suggestion = () => {
  const [ courses ,setCourses] = useState([])
  const [loading,setLoading ] = useState(true);
  useEffect(() =>{

    function getCourse(){
      
      axios.get(base+"course/all")
      .then(res =>{
        console.log(res.data);
        setCourses(res.data)
        setLoading(false)
      }).catch(err =>{
        console.log(err)
      })
    }
    getCourse()
  },[])
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
            Most Loved Courses 
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
        <div style={{display:"grid",position:"relative",padding:"0px 5px",gap: "10px",gridTemplateColumns:"repeat(5,auto)"}}>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>
          <CourseWidget loading={loading}/>      
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
          Most Loved Courses 
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
      <div style={{display:"grid",position:"relative",padding:"0px 5px",gap: "10px",gridTemplateColumns:"repeat(5,auto)"}}>
        {courses.map((course) =>{
            // eslint-disable-next-line react/jsx-key
            return <CourseWidget loading={loading} title={course.title} thumbnail={course.thumbnail} id={course.id}/>
          })

        }
      </div>
    </div>
  )
}

export default Suggestion
