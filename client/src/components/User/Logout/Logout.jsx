import * as authService from '../../../services/authService';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authContex';


export const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(user.accessToken)
        .then(() => {
            logout();
            navigate('/');
        })
    })
}