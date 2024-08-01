import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAssignment from "../Pages/Home/AllAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import SignUp from "../Authentication/SignUp/SignUp";
import Login from "../Authentication/SignUp/Login";
import AssLayout from "../Pages/Home/AssLayout";
import AssignmentDetails from "../Pages/Home/AssignmentDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/Home',
            element: <AllAssignment></AllAssignment>,
            loader: () => fetch('http://localhost:5000/allAssignment')
        },
        {
          path: '/CreateAssignment',
          element:<CreateAssignment></CreateAssignment>,
        },
        {
          path: '/AssignmentLayout',
          element: <AssLayout></AssLayout>

        },
        {
          path: '/AssignmentDetails/:id',
          element: <AssignmentDetails></AssignmentDetails>,
          loader: ()=> fetch('http://localhost:5000/allAssignment'),

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