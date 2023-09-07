import { Outlet } from "react-router-dom"
import Header from "./header"
import './index.css'
const DashboardLayout = () => {
  return (
    <div style={{position:"absolute",height:"100%",width:"100%",overflow:"hidden"}}>
      <Header />
      <main style={{position:"relative",height:"88.55%",overflowY:"auto",overflowX:"hidden"}}>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
