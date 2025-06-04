import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Alert from "./components/common/Alert";
import { UserProvider } from "./contexts/auth.context";

function App() {
  return (
    <>
      <Alert />
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </>
  )
}

export default App
