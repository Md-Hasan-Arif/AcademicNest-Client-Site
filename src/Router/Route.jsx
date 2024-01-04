import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAssignment from "../Pages/Home/AllAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <AllAssignment></AllAssignment>
        }
      ]
    },
  ]);

  export default router