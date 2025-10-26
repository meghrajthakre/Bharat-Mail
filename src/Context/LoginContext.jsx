import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

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
          console.log("Auto-login failed:", err.response?.data || err.message)
        );
    }
  }, []);

  const logInUser = async (tokenValue) => {
    try {
      setIsLoggedIn(true);
      setToken(tokenValue);
      localStorage.setItem("token", tokenValue);

      const toastId = toast.loading("Logging in...");

      const res = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${tokenValue}` },
      });
      setUserData(res.data);

      toast.success("Login Successful!", { id: toastId, duration: 500 });

      // Navigate after toast finishes
      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Login Failed";
      toast.error(`Login Failed: ${message}`, { duration: 2000 });
      console.log("Login error:", message);
      setIsLoggedIn(false);
      setToken(null);
      setUserData(null);
    }
  };

  const logOutUser = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
    toast.success("Logout Successful!");
    navigate("/");
  };

  return (
    <LoginContext.Provider
      value={{ logInUser, logOutUser, setUserData, userData, isLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
