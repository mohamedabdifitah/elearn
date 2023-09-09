import { BrowserRouter, Routes ,Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/dashboard/dashboard";
import Home from "./pages/home/home";
import SearchCourses from "./pages/course/search";
import GroupCourses from "./pages/course/group";
import Course from "./pages/course/course";
import MiniLayout from "./layout/minLayout/mini";
import LoginComponent from "./pages/auth/login";
import Register from "./pages/auth/register";
import ChangePassword from "./pages/auth/change";
import { useContext } from "react";
import AuthContext from "./context/authprovider";
import ResetPassword from "./pages/auth/resetpassword";
function App() {
  const { auth} = useContext(AuthContext);
  // console.log(a
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {"/"} element = {auth?<DashboardLayout />:<Navigate to={"/auth/login"}/>}>
          <Route path = {""} element = { <Home /> } index/>
          <Route path ="courses/search" element ={<SearchCourses />}/>
          <Route path ="courses/group/:group" element ={<GroupCourses />}/>
          <Route path ="courses/id/:id" element ={<Course />}/>
        </Route>
        <Route path={"/auth/"} element={<MiniLayout />}>
          <Route path={"login"} element={<LoginComponent />} />

          <Route path={"register"} element={<Register />} />
          <Route path={"forget/password"} element={<ChangePassword />} />
          <Route path={"reset/password"} element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
