import { useContext } from "react"
import { AuthContext } from "../../contexts/authContex"
import { Navigate, Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthGuard = () => {
    const { user } = useContext(AuthContext);
    
    if(!user.email) {
        toast.error('За да влезете в тази страница, моля, влезте в профила си или се регистрирайте.', {
            
        });
        return <Navigate to='/login'/>
    }

    return <Outlet/>
}