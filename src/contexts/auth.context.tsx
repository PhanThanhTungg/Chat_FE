import type { User } from "@/types/auth.type";
import type { UserContextType } from "@/types/context.type";
import { createContext, useState } from "react";

const userContextDefault:UserContextType = {
  user: null,
  setUser: () => null,
}
export const UserContext = createContext<UserContextType>(userContextDefault);

export const UserProvider = ({children}:{children: React.ReactNode}) => {
  // Load user from localStorage
  const accessToken:string | null = localStorage.getItem("accessToken")+"";
  const userFromStorage: string | null = localStorage.getItem("user");
  const initialUser: User | null = userFromStorage && accessToken ? 
    {accessToken,user:JSON.parse(userFromStorage)} : null;

  const [user, setUser] = useState<User | null>(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}