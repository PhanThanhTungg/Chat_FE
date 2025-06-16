import type { SocketContextType } from "@/types/context.type";
import { createContext, useState } from "react";
import { io, Socket } from 'socket.io-client';
const URL:string = import.meta.env['VITE_NODE_ENV'] === 'production' ? undefined : import.meta.env['VITE_BACKEND_URL'];

const socketContextDefault: SocketContextType = {
  socket: null,
  setSocket: () => null
}

export const SocketContext = createContext<SocketContextType>(socketContextDefault);

export const SocketProvider = ({children}:{children: React.ReactNode}) => {
  const accessToken: string | null = localStorage.getItem("accessToken") + "";
  const defaultSocket = io(URL,{
    withCredentials: true,
    auth:{
      token: accessToken
    }
  });
  const [socket, setSocket] = useState<Socket|null>(defaultSocket);
  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
}