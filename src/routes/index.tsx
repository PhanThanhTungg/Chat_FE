import LayoutAuth from "@/layouts/LayoutAuth";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
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

])

export default routes;