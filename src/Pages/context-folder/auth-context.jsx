import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const localStorageToken = JSON.parse(localStorage.getItem('loginToken'));
    const [token, setToken] = useState(localStorageToken && localStorageToken.token)
    const [loginData, setLoginData] = useState({
        email: 'anandraj143@gmail.com',
        password: "anand123",

    })
    const LoginFunc = async () => {
        try {
            const { data } = await axios.post('/api/auth/login', loginData)
            localStorage.setItem('loginToken', JSON.stringify({ token: data.encodedToken }))
            setToken(data.encodedToken)
            // navigate(location?.state?.from?.pathname, { replace: true });
            navigate('/Product');
        } catch (error) {
            console.log(error);
        }
    }
    const LogOutHandler = () => {
        setTimeout(() => {
            localStorage.removeItem('loginToken')
            setToken('')
            navigate("/")
        }, 1000);
    }

    return (
        <AuthContext.Provider value={{ loginData, setLoginData, token, setToken, LogOutHandler, LoginFunc }}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)
const AuthContext = createContext()
export { useAuth, AuthProvider }