import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// 1️⃣ Context banao
const LoginContext = createContext();

// 2️⃣ Provider
export const LoginProvider = ({ children }) => {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [tokens, setToken] = useState(null)
    const [userData, setUserData] = useState()

    // 🔹 Auto login if token exists
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setIsLoggedIn(true);
            setToken(savedToken);

            axios
                .get("https://api.escuelajs.co/api/v1/auth/profile", {
                    headers: { Authorization: `Bearer ${savedToken}` },
                })
                .then((res) => setUserData(res.data))
                .catch((err) =>
                    console.log("Auto-login fetch failed:", err.response?.data || err.message)
                );
        }
    }, []);

    const logInUser = async (tokenValue) => {

        try {
            setIsLoggedIn(true);
            localStorage.setItem('token', tokenValue);
            setToken(tokenValue);


            // ✅ Correct header format
            const res = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                headers: {
                    Authorization: `Bearer ${tokenValue}`,
                },
            });

            setUserData(res.data);

            // Navigate after toast duration
            setTimeout(() => {
                navigate("/home");
            }, 800);

        } catch (err) {
            const message = err.response?.data?.message || err.message || "Login Failed";
            toast.error(`Login Failed: ${message}`);
            toast.error(`Login Failed: ${message}`, { duration: 2000 });
            console.log(message);
        }

    }
    const logOutUser = () => {
        setIsLoggedIn(false);
        setToken(null);
        setUserData(null);
        localStorage.removeItem("token");
        navigate("/");
    }

   


    return (
        <LoginContext.Provider value={{  logInUser, logOutUser, setUserData, userData, isLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
};

// 3️⃣ Custom hook (easy access)
export const useLogin = () => useContext(LoginContext);
