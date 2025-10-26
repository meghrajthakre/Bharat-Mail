import React, { useEffect, useState } from "react";
import "../index.css";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    document.body.classList.add("dark"); // always dark mode
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Password validation
    if (pass !== confirmPass) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }


    const reqBody = {
      id: Date.now(),
      name: fullName,
      email: email,
      password: pass,
      avatar: "https://picsum.photos/200",
    };

    try {
      const res = await axios.post(`https://api.escuelajs.co/api/v1/users/`, reqBody);
      toast.success("User Created Successfully 🎉");
      setFullName("");
      setEmail("");
      setPhone("");
      setPass("");
      setConfirmPass("");
      console.log(res);
      navigate('/')

    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Signup Failed";
      toast.error(`Signup Failed: ${message}`);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] px-4">

        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md bg-[var(--header-bg)] rounded-2xl shadow-xl p-4 sm:p-8 border border-[#2a2a2a]">
         

          {/* Logo & Title */}
          <div className="flex items-center">
            <img
              src="../src/assets/icons/favIcons.webp"
              alt="Bharat Mail"
              className="h-10 sm:h-12 mr-2"
            />
            <h1 className="text-lg sm:text-xl font-medium text-blue-500">
              Bharat Mail
            </h1>
             <div className="absolute right-10">
            <button
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center text-sm sm:text-sm text-blue-400 hover:text-blue-500 transition"
            >
              &#8592; Back
            </button>
          </div>
          </div>

          {/* Headings */}
          <h2 className="text-xl sm:text-2xl font-normal mb-1">Create account</h2>
          <p className="text-xs sm:text-sm text-[var(--secondary-text)] mb-6 sm:mb-8">
            Sign up for a new Bharat Mail account
          </p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6" onSubmit={createUser}>
            {/* Full Name */}
            <div className="relative">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                required
                className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
              />
              <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
              />
              <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Choose Bmail
              </label>
            </div>

            {/* Number */}
            <div className="relative">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                maxLength="10"
                required
                className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
              />
              <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Number
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                required
                className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
              />
              <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                type="password"
                required
                className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
              />
              <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Confirm Password
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-medium py-2 sm:py-3 rounded-md text-sm sm:text-base transition-colors ${loading
                  ? "bg-blue-600 opacity-60 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  }`}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2 sm:gap-0">
              <NavLink
                to="/"
                className="text-blue-400 hover:underline text-sm sm:text-sm transition"
              >
                Already have an account? Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
