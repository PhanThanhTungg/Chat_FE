import type { User } from "./auth.type";

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
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