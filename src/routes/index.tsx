import LayoutAuth from "@/layouts/LayoutAuth";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme.context";

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
    ],
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  }
]
const BrowserRouter = createBrowserRouter(routes);
export default BrowserRouter;