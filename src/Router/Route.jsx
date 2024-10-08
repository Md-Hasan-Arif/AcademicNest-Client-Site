import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllAssignment from "../Pages/Home/AllAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import SignUp from "../Authentication/SignUp/SignUp";
import Login from "../Authentication/SignUp/Login";
import AssLayout from "../Pages/Home/AssLayout";
import AssignmentDetails from "../Pages/Home/AssignmentDetails";
import UpdateAssignment from "../Pages/Home/UpdateAssignment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <AllAssignment></AllAssignment>,
            loader: () => fetch('http://localhost:5000/allAssignment'),
        },
        {
          path: '/CreateAssignment',
          element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
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
          path:'/updateAssignment/:id',
          element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/allAssignment/${params.id}`),
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