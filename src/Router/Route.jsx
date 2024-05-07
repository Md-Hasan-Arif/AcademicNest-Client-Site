import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAssignment from "../Pages/Home/AllAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import SignUp from "../Authentication/SignUp/SignUp";
import Login from "../Authentication/SignUp/Login";

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
        },
        {
          path: '/register',
          element:<SignUp></SignUp>,
        },
        {
          path: '/login',
          element:<Login></Login>,
        },
      ]
    },
  ]);

  export default router