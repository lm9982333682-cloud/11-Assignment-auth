import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/api";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(null);

    const token = localStorage.getItem('token')
    const getMe = async () => {

        try {
            const res = await api.get(`/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = res.data;
            if (data.success) {
                setIsLogin(data.users)
           }

        } catch (err) {
            console.log(err.response.data.message)
        }
    }


    const value = {
        isLogin,
        setIsLogin
    };

    useEffect(() => {
        getMe();
    }, [])






    return (<AuthContext.Provider value={value} >{children}</AuthContext.Provider>)
};


const useAuthContext = () => useContext(AuthContext);

export { useAuthContext }

export default AuthProvider;