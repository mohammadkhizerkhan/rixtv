import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context";


function RequireAuth() {
    const location=useLocation();
    const {token}=useAuth();
    return token?<Outlet/>:<Navigate to="/login" state={{from:location.pathname}} replace></Navigate>
}

export  {RequireAuth}
