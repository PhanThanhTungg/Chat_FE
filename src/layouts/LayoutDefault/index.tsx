import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { checkAuth } from "../../helpers/handleJWT.helper.js";
import { UserContext } from "@/contexts/auth.context.js";
import { useContext, useEffect, useState } from "react";
import type { checkAuthResponse } from "@/types/auth.type.js";

const LayoutDefault = () => {
  const [authen, checkAuthen] = useState<checkAuthResponse>({ isAuthenticated: false });
  const [isLoading, setLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  console.log("authen", authen);

  useEffect(() => {
    const check = async () => {
      const checkResult = await checkAuth(user?.accessToken || null);
      checkAuthen(checkResult);
      setLoading(false);
    };
    check();
  }, [user?.accessToken]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  } else {
    return (
      <>
        {authen?.isAuthenticated ? (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ) : (
          <Navigate to="/login"></Navigate>
        )}
      </>
    );
  }
}
export default LayoutDefault;