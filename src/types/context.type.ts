import type { User } from "./auth.type";
import type { Socket } from "socket.io-client";

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface SocketContextType{
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
}

export type Theme = "dark" | "light" | "system"
 
export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}