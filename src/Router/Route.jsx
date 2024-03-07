import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAssignment from "../Pages/Home/AllAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/Home',
            element: <AllAssignment></AllAssignment>,
        },
        {
          path: '/CreateAssignment',
          element:<CreateAssignment></CreateAssignment>,
        }
      ]
    },
  ]);

  export default router