/* eslint-disable no-constant-condition */
import "./index.css"
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
// import StarIcon from '@mui/icons-material/Star';
const CourseWidget = (props) => {
  // eslint-disable-next-line react/prop-types
  var { loading , title,author,rating , participant,thumbnail } = props;
  return (
    <div className="course-container" style={{marginLeft:"5px",position:"relative",width:"250px"}}>
      {loading?<Skeleton sx={{ height: 135,width:240 }} animation="wave" variant="rectangular" />:
      <img src={thumbnail} alt="" className="course-card-image-module--image--3V2QD course-card-module--course-image--2Pg51 browse-course-card--image--1-_Wa" width="240" height="135" loading="lazy"></img>}
      <div className="course-content" style={{padding:"5px"}}>

        {loading?
        <div style={{gap:"2px",display:"flex",flexDirection:"column"}}>
          <Skeleton
              animation="wave"
              height={10}
              width="95%"
              // style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="85%"
              // style={{ marginBottom: 6 }}
            />
          </div>
        :<span className="big">{title}</span>}
        {loading?<Skeleton
              animation="wave"
              height={10}
              width="20%"
              style={{ marginTop: 6 }}
            />:<p className="grey small" >Admin</p>}
        {loading?<Skeleton
              animation="wave"
              height={25}
              width="95%"
              // style={{ marginBottom: 6 }}
            />:<div className="course-rating" style={{display:"flex"}}>
          <span data-purpose="seo-rating" style={{fontSize:"0.9rem"}} className="big">4.5</span>
          <Rating
            name="simple-controlled"
            precision={0.5}
            readOnly
            value={4.5}
            // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            sx={{fontSize:"1rem"}}
            />
          <span data-purpose="seo-num-reviews" className="small grey" style={{position:"relative",top:"-2px"}}>(343)</span>
          
        </div>}
      </div>
    </div>
  )
}

export default CourseWidget
