import {jwtDecode} from "jwt-decode";
export const checkAuth = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    console.log("decoded jwt: ");
    console.log(decoded);

    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decoded.exp < currentTime) {
      console.log("Token expired");
      localStorage.removeItem("accessToken");
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}