import routes from "../../routes/index";
import { useRoutes } from "react-router-dom";

const AllRoute = ()=>{
  const routeElements = useRoutes(routes)

  return (
    <>
      {routeElements}
    </>
  )
}

export default AllRoute;