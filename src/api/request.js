import axios from "axios"

export var base = "https://elearnserver.onrender.com/"
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
export function CreateStudent(email,username,password){
  axios.post(base+"student/create",
    {
      email: email,
      password: password,
      username: username
    },
  )
  .then(res =>{
    return res.data
  }).catch(err =>{
    console.log(err)
    return []
  })
}