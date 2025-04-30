import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <>
      <Alert/>
      <RouterProvider router = {routes}/>
    </>
  )
}

export default App
