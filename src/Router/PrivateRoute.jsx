import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) =>{

    const {user, loading} = useContext(AuthContext);

    if(loading){
       return <span className="text-center"><span className="loading loading-bars loading-lg"></span></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to ="/login"></Navigate>
};

export default PrivateRoute;
