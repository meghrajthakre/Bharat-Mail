import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { useLogin } from "../Context/LoginContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const [bmail, setBmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const { logInUser, } = useLogin()


  const handleLoginForm = async (e) => {
    e.preventDefault()
    const payload = {
      email: bmail,
      password: password
    }
    setLoading(true)


    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', payload);
      logInUser(res.data.access_token);
    }
    catch (err) {
      const message = err.response?.data?.message || err.message || "Login Failed";
      console.log(message);
      
    }
    finally {
      setLoading(false);
      setBmail('');
      setPassword('');
    }
    setBmail('');
    setPassword('')

  }


  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center -mt-10 bg-[var(--bg-color)] text-[var(--text-color)] px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md bg-[var(--header-bg)] rounded-2xl shadow-xl p-6 sm:p-8 border border-[#2a2a2a]">
        {/* Logo & Title */}
        <div className="flex items-center mb-6">
          <img
            src="../src/assets/icons/favIcons.webp"
            alt="Bharat Mail"
            className="h-10 sm:h-12 mr-2"
          />
          <h1 className="text-lg sm:text-xl font-medium uppercase -tracking-tighter text-blue-500">Bharat Mail</h1>
        </div>

        {/* Headings */}
        <h2 className="text-xl sm:text-2xl font-normal mb-1">Sign in</h2>
        <p className="text-xs sm:text-sm text-[var(--secondary-text)] mb-6 sm:mb-8">
          to continue to Bharat Mail
        </p>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6" onSubmit={handleLoginForm} >
          <div className="relative">
            <input
              value={bmail}
              onChange={(e) => setBmail(e.target.value)}
              type="email"
              required
              className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-7 md:pt-7 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
            />
            <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
              Bmail or phone
            </label>
          </div>

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-7 md:pt-7 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
            />
            <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
              Password
            </label>
          </div>

          {/* Login Button */}
          <div className="pt-4 sm:pt-6">
            <button
              disabled={loading}
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
            >
              {loading ? "Login..." : "Login"}
               <Toaster position="top-right" reverseOrder={false} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2 sm:gap-0">
            <NavLink
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-sm transition"
            >
              Forgot email?
            </NavLink>
            <NavLink
              to="/signup"
              className="text-blue-400 hover:underline text-sm sm:text-sm transition"
            >
              Create account
            </NavLink>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-1 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm text-[var(--secondary-text)] md:mb-5 flex-wrap">
        <select className="bg-[var(--btn-bg)] text-[var(--btn-text)] border border-[#2a2a2a] rounded-md px-2 py-1 text-xs sm:text-sm focus:outline-none">
          <option>English (India)</option>
          <option>हिन्दी</option>
          <option>मराठी</option>
          <option>தமிழ்</option>
        </select>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
      </footer>
    </div>
  );
};

export default Login;
