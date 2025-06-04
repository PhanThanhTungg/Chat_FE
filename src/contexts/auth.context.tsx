import type { User, UserContextType } from "@/types/auth.type";
import { createContext, useState } from "react";

const userContextDefault:UserContextType = {
  user: null,
  setUser: () => null,
}
export const UserContext = createContext<UserContextType>(userContextDefault);

export const UserProvider = ({children}:{children: React.ReactNode}) => {
  // Load user from localStorage
  const accessToken = localStorage.getItem("accessToken")+"";
  const userFromStorage = localStorage.getItem("user");
  const initialUser: User | null = userFromStorage && accessToken ? 
    {accessToken,user:JSON.parse(userFromStorage)} : null;

  const [user, setUser] = useState<User | null>(initialUser);
  console.log(user);
  return (
    <UserContext value={{ user, setUser }}>
      {children}
    </UserContext>
  )
}