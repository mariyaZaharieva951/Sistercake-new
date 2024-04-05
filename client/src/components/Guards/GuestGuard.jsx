import { useContext } from "react";
import { AuthContext } from "../../contexts/authContex";
import { Navigate, Outlet } from "react-router-dom";

export const GuestGuard = () => {
    const { user } = useContext(AuthContext);

    if(user.email) {
        return <Navigate to='/'/>
    }

    return <Outlet/>
}