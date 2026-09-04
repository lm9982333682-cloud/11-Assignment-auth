import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const GuestLayout = ({ children }) => {
    const { isLogin } = useAuthContext();

    if (isLogin) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default GuestLayout;