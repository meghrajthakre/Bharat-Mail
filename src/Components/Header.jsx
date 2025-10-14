import React, { useState, useEffect } from 'react';
import { Menu, SlidersHorizontal, Search, HelpCircle, Settings, Sun, Moon } from "lucide-react";
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from './RightSideBar';
import { useAppContext } from '../Context/AppContext';
import SearchBox from './SearchBox';

const TooltipIcon = ({ icon: Icon, text }) => (
  <div className="relative group flex items-center">
    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
    <span className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2
                    bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                    opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Header = () => {
  const { open, setOpen } = useAppContext();
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDark(!dark);
  };

  // Optional: set initial dark mode based on prefers-color-scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      setDark(true);
    }
  }, []);

  return (
    <>
      <nav
        className="z-50 flex items-center justify-between px-3 py-3 md:py-2 sm:px-3 md:px-5 transition-colors duration-300"
        style={{ backgroundColor: 'var(--header-bg)', color: 'var(--secondary-text)' }}
      >
        {/* Left Section: Menu + Logo */}
        <div className='flex items-center gap-2'>
          <div onClick={() => setOpen(!open)}>
            <TooltipIcon icon={Menu} text="Menu" />
          </div>

          <div className='flex items-center'>
            <img className='hidden w-8 md:w-12' src='./src/assets/icons/logo.png' alt="Bharat Mail Logo" />
            <h1 className='hidden sm:block text-lg md:text-2xl ml-1' style={{ color: 'var(--secondary-text)' }}>Bmail</h1>
          </div>
        </div>

        {/* Middle Section: Search Box */}
      <SearchBox/>

        {/* Right Section */}
        <div className='flex items-center gap-2 sm:gap-4'>
          {/* Dark Mode Toggle */}
          <div
            className='cursor-pointer flex items-center transition-colors duration-300'
            onClick={toggleDarkMode}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </div>

          <div className="hidden md:block">
            <TooltipIcon icon={HelpCircle} text="Help" />
          </div>
          <TooltipIcon icon={Settings} text="Settings" />

          <div className="relative group">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              alt="Profile"
              className=" sm:flex md:flex  w-5 h-5 md:w-10 md:h-10 rounded-full cursor-pointer"
            />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2
                             bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                             opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Profile
            </span>
          </div>
        </div>
      </nav>

      {/* Left & Right Sidebars */}
      <LeftSideBar />
      <RightSideBar />
    </>
  );
};

export default Header;
