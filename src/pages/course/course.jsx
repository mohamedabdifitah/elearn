/* eslint-disable react/jsx-key */
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { base } from "../../api/request"
import axios from "axios"
import "./index.css"
import { Card, IconButton, Rating, Stack } from "@mui/material"
import LessonComponent from "./lesson"
import BasicModal from "../../widgets/videoplayer"
import { FaPlay } from "react-icons/fa"
import { AiOutlineCheck} from "react-icons/ai"
import { MdOndemandVideo } from "react-icons/md"
import AuthContext from "../../context/authprovider"
const Course = () => {
  const params = useParams("id")
  const [ course, setCourse] = useState()
  const [ loading ,setLoading] = useState(true)
  const { setOpenModal,setUrl} = useContext(AuthContext);
  useEffect(() =>{

    function getCourse(){
      
      axios.get(base+"course/get/"+params.id)
      .then(res =>{
        console.log(res.data);
        setCourse(res.data)
        setLoading(false)
      }).catch(err =>{
        console.log(err)
      })
    }
    getCourse()
  },[params.id])
  function BasicModalRunner(url){
    setUrl(url)
    setOpenModal(true)
  }
  return (
    <div style={{position:"relative",height:"100%",paddingBottom:"10px"}}>
      <div className="course-descript">
        <div style={{position:"relative",width:"600px",gap:"10px",display:"flex",flexDirection:"column"}}>

          <h1 style={{fontSize:"2rem" , fontFamily:"var(--font-stack-heading)"}}>{course?.title}</h1>
          <p style={{fontSize:"1.3rem",fontFamily:"var(--font-stack-text)",fontWeight:400}}>{course?.description}</p>
          <div style={{display:"flex",gap:"3px"}}>
          <span data-purpose="seo-rating" style={{fontSize:"0.9rem"}} className="big">{course?.stats?.review_number}</span>
            <Rating
              name="simple-controlled"
              precision={0.1}
              readOnly
              value={course?.stats?.review_number?course?.stats?.review_number:4.75}
              // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              sx={{fontSize:"1rem"}}
              />
            <span data-purpose="seo-num-reviews" className="small grey" style={{position:"relative",top:"-2px"}}>{course?.stats?.participants?course?.stats?.participants:300} students</span>
          </div>
        </div>
        <div style={{position:"relative"}}>
          <div style={{width:"340px" ,height:"191.25px",boxSizing: "border-box",left:"183px",position:"relative"}}>
            <img src={course?.thumbnail} width={"340px"} height={"191.25px"} />
            <button onClick={()=>BasicModalRunner(course?.lessons[0]?.asset)} style={{position:"relative",top:"-138px",left:"135px",backgroundColor:"white",outline:"none",border:"none",borderRadius:"55px",width:"70px",height:"70px",cursor:"pointer"}}>
              <FaPlay color="black" size={20}/>
            </button>
            <h3 style={{position:"relative",top:"-108px",left:"100px"}}>Preview This course</h3>
          </div>
        </div>
        {/* <p style={{fontSize:"1.2rem",fontFamily:"var(--font-stack-heading)"}}>{course?.description}</p> */}
      </div>
      <div className="course-content" style={{position:"relative",width:"100%",height:"42%",paddingLeft:"90px",gap:"30px",display:"flex",flexDirection:"column"}}>
        <div className="goals" style={{marginTop:"10px"}}>
          <h2 style={{paddingLeft:"20px",paddingTop:"20px",fontFamily:"var(--font-stack-heading)"}}>What you'll learn</h2>
          <br/>
          <div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"6px",paddingRight:"10px",paddingLeft:"10px"}}>

          {course?.goals?.map((goal) =>{
            return (
              <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <AiOutlineCheck size={25}/>
                <p style={{lineBreak:"normal",fontFamily: "var(--font-stack-text)",fontWeight: "400",color:"#2d2f31"}}>{goal}</p>

              </div>
            )
          })}
          </div>
        </div>
        <div className="goals" style={{padding:"20px",width:"656px",height:"fit-content"}}>
          <div style={{marginTop:"10px",display:"flex",flexDirection:"column",gap:"20px"}}>

            {  course?.lessons?.map((lesson)=>{
                return (
                  <div style={{position:"relative",width:"100%",display:"grid",gap:"20px",fontSize:"20px",gridTemplateColumns:"30px auto 100px"}}>
                    <MdOndemandVideo />
                    <p style={{textDecoration:"underline",textDecorationColor:"#401b9c",color:"#401b9c",cursor:"pointer"}} onClick={()=>BasicModalRunner(lesson?.asset)}>{lesson?.title}</p>
                    <p style={{fontSize:"15px",fontWeight:"400"}}>{lesson?.duration}</p>
                  </div>
                )
              })
            }
          </div>
            </div>
        <BasicModal />
      </div>
    </div>
  )
}

export default Course