import React, { useEffect, useState } from "react";
import "../index.css";

const SignUp = () => {
    const [inupt , setInput] =useState('');
    

  useEffect(() => {
    document.body.classList.add("dark"); // always dark mode
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md bg-[var(--header-bg)] rounded-2xl shadow-xl p-4  sm:p-8 border border-[#2a2a2a]">
        {/* Logo & Title */}
        <div className="flex items-center ">
          <img
            src="../src/assets/icons/favIcons.webp"
            alt="Bharat Mail"
            className="h-10 sm:h-12 mr-2"
          />
          <h1 className="text-lg sm:text-xl font-medium text-blue-500">Bharat Mail</h1>
        </div>

        {/* Headings */}
        <h2 className="text-xl sm:text-2xl font-normal mb-1">Create account</h2>
        <p className="text-xs sm:text-sm text-[var(--secondary-text)] mb-6 sm:mb-8">
          Sign up for a new Bharat Mail account
        </p>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
            />
            <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
              Full Name
            </label>
          </div>

          {/* Username / Email */}
          <div className="relative">
            <input
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
              type="number"
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
              type="password"
              required
              className="peer w-full bg-[var(--search-bg)] border border-[#2f2f2f] rounded-md px-3 pt-4 pb-2 sm:pt-5 sm:pb-2 text-[var(--text-color)] focus:border-blue-500 outline-none text-sm sm:text-base"
            />
            <label className="absolute left-3 top-2 text-sm sm:text-sm text-[var(--secondary-text)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
              Confirm Password
            </label>
          </div>

          {/* Create Account Button */}
          <div className="pt-4 sm:pt-6">
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
            >
              Create Account
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-2 sm:gap-0">
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-sm transition text-center sm:text-left"
            >
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
