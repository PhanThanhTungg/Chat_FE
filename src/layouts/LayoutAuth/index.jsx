import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const LayoutAuth = () => {
  return (
    <>
      <div className="bg-bg-light min-h-screen">
        <div className="container mx-auto py-[50px] ">
          <img src={logo} className="w-[200px] mx-auto"></img>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default LayoutAuth;