import { createContext} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

const authState = {
    _id: '',
    email: '',
    accessToken: ''
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('auth', authState);

    const login = (authData) => {
        setUser(authData)
    }

    const logout = () => {
        setUser(authState)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}