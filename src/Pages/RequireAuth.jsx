
import { Navigate, useLocation } from "react-router"
import { useAuth } from "./context-folder/auth-context"


const RequireAuth = ({ children }) => {
    const { token } = useAuth()
    const location = useLocation()
    return (
        <>
            {
                token ? children : <Navigate to='/LoginForm' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth