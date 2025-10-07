import React, { useState } from 'react';
import { Menu, SlidersHorizontal, Search, HelpCircle, Settings } from "lucide-react";
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from './RightSideBar';

const TooltipIcon = ({ icon: Icon, text }) => (
  <div className="relative group flex items-center">
    <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-green-600" />
    <span className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2
                    bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                    opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='z-50 flex items-center justify-between px-3 py-2 sm:px-3 md:px-5 bg-[#f6f8fc]'>
        {/* Left Section: Menu + Logo */}
        <div className='flex items-center gap-2'>
          <div onClick={() => setOpen(!open)}>
            <TooltipIcon icon={Menu} text="Menu" />
          </div>

          <div className='flex items-center'>
            <img className='w-8 md:w-12' src='./src/assets/icons/logo.png' alt="Bharat Mail Logo" />
            <h1 className='hidden sm:block text-lg md:text-2xl text-[#454746] ml-1'>Bmail</h1>
          </div>
        </div>

        {/* Middle Section: Search Box */}
        <div className='flex items-center flex-1 max-w-[600px] mx-2 sm:mx-4 bg-[#f2f2f2] rounded-full px-2 sm:px-3 py-1 sm:py-2'>
          <TooltipIcon icon={Search} text="Search" />
          <input type="text" placeholder='Search Mail'
            className='flex-1 w-auto outline-none px-2 text-[#454746] text-sm sm:text-base' />
          <TooltipIcon icon={SlidersHorizontal} text="Filter" />
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-2 sm:gap-4'>
          <div className="hidden md:block">
            <TooltipIcon icon={HelpCircle} text="Help" />
          </div>
          <TooltipIcon icon={Settings} text="Settings" />

          <div className="relative group">
            <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              alt="Profile" className="w-6 h-6 md:w-10 md:h-10 rounded-full cursor-pointer" />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2
                             bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                             opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Profile
            </span>
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <LeftSideBar open={open} />
      <RightSideBar />
    </>
  );
}

export default Header;
