import { refreshToken } from "@/services/user.service";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  exp: number;
}

export const checkAuth = async (accessToken: string | null) => {
  if (!accessToken || accessToken === "null") {
    console.log("No access token found");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    return { isAuthenticated: false }
  };
  try {
    const decoded: JWTPayload = jwtDecode<JWTPayload>(accessToken);
    console.log("Decoded JWT:", decoded);

    const currentTime: number = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.log("Token expired");
      const res = await refreshToken();
      console.log("Response from refreshToken:", res);
      if (res && res.accessToken) {
        localStorage.setItem("accessToken", res.accessToken);
        console.log("Token refreshed successfully");
        return {
          isAuthenticated: true,
          isRefreshed: true,
          accessToken: res.accessToken
        }
      } else{
        console.log("Failed to refresh token");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        return { isAuthenticated: false};
      };
    }
    return { isAuthenticated: true };
  } catch (error) {
    console.log("Error decoding JWT:", error);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    return { isAuthenticated: false };
  }
};