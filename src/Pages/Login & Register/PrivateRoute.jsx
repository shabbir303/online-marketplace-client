

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
// import { Authcontext } from "./AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
      return <span className="loading loading-dots loading-lg mt-[220px] flex justify-center items-center mx-auto "></span>
    }
   if(user){
     return children;
}

    return (
        <div>
            <Navigate state={location.pathname} to='/login' ></Navigate>
        </div>
    );
};
export default PrivateRoute;