import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../../helpers/handleJWT.helper.js";
import { UserContext } from "@/contexts/auth.context.js";
import { useContext, useEffect, useState } from "react";
import type { checkAuthResponse } from "@/types/auth.type.js";

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/common/Sidebar";
import { SocketProvider } from "@/contexts/socket.context.js";

const LayoutDefault = () => {
  const [authen, checkAuthen] = useState<checkAuthResponse>({ isAuthenticated: false });
  const [isLoading, setLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const check = async (): Promise<void> => {
      const checkResult: checkAuthResponse = await checkAuth(user?.accessToken || null);
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
            <SocketProvider>
              <SidebarProvider defaultOpen={true}
                style={{
                  "--sidebar-width": "5rem",
                  "--sidebar-width-mobile": "5rem",
                } as React.CSSProperties}
              >
                <AppSidebar />
                <main>
                  <Outlet />
                </main>
              </SidebarProvider>
            </SocketProvider>
          </>
        ) : (
          <Navigate to="/login"></Navigate>
        )}
      </>
    );
  }
}
export default LayoutDefault;