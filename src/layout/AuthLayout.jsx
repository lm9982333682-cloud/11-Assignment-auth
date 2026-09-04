import { Navigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

const AuthLayout = ({ children }) => {
    const { isLogin } = useAuthContext()


    if (!isLogin) {
        return <Navigate to={'/'} replace />
        
    };

    return (
        <div>
            {children}
        </div>
    )

}

export default AuthLayout
