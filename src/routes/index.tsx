import LayoutAuth from "@/layouts/LayoutAuth";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme.context";
import Error404 from "@/pages/Error404";
import Contact from "@/pages/Contact";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LayoutDefault />
      </ThemeProvider>
    </>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contacts", element: <Contact /> },
    ],
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ]
  },{
    path: "*",
    element: <Error404 />
  }
]
const BrowserRouter = createBrowserRouter(routes);
export default BrowserRouter;