import { Link, Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { checkAuth } from "../../helpers/handleJWT.helper.js";

const LayoutDefault = () => {
  const checkAuthen = checkAuth();
  return (
    <>
      {
        checkAuthen ? (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ) : <Navigate to="/login"></Navigate>
      }
    </>
  )
}
export default LayoutDefault;