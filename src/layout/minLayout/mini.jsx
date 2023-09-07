import { Outlet } from "react-router-dom"
const MiniLayout = () => {
  return (
    <div style={{position:"absolute",height:"100%",width:"100%",overflow:"hidden"}}>
      <Outlet />
    </div>
  )
}

export default MiniLayout
