import axios from "axios"

export var base = "https://elearn-hm51.onrender.com/"
export function GetAllCourses(){
  // let response
  axios.get(base+"course/all")
  .then(res =>{
    return res.data
  }).catch(err =>{
    console.log(err)
    return []
  })
  // return response
}