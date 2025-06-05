import { Navigate, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/auth.context";
import { checkAuth } from "@/helpers/handleJWT.helper";
import type { checkAuthResponse } from "@/types/auth.type";
const LayoutAuth = () => {
  const [authen, checkAuthen] = useState<checkAuthResponse>({ isAuthenticated: false });
  const [isLoading, setLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const check = async ():Promise<void> => {
      const checkResult:checkAuthResponse = await checkAuth(user?.accessToken || null);
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
        {!authen?.isAuthenticated ? (
          <div className="bg-bg-light min-h-screen">
            <div className="container mx-auto py-[50px] ">
              <img src={logo} className="w-[200px] mx-auto"></img>
              <Outlet />
            </div>
          </div>
        ) : (
          <Navigate to="/" />
        )}
      </>
    )
  }
}
export default LayoutAuth;