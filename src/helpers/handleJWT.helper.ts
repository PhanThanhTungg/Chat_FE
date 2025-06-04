import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  exp: number;
}

export const checkAuth = (): boolean => {
  const token: string | null = localStorage.getItem("accessToken");
  if (!token || token === "null") return false;

  try {
    const decoded: JWTPayload = jwtDecode<JWTPayload>(token);
    console.log("Decoded JWT:", decoded);

    const currentTime: number = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.log("Token expired");
      localStorage.removeItem("accessToken");
      return false;
    }
    return true;
  } catch (error) {
    console.log("Error decoding JWT:", error);
    localStorage.removeItem("accessToken"); 
    return false;
  }
};