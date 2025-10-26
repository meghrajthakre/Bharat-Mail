import { Settings } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { useLogin } from '../Context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const { userData, logOutUser } = useLogin();
  const navigate = useNavigate();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddAccount = () => {
    navigate('/');
  };

  const TooltipIcon = ({ icon: Icon, text }) => (
    <div className="relative group flex items-center">
      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-green-500 transition-all duration-300 hover:rotate-90" />
      <span className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2
                    bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                    opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {text}
      </span>
    </div>
  );

  return (
    <div className="relative">
      {/* Settings icon */}
      <div onClick={() => setOpen(!open)}>
        <TooltipIcon icon={Settings} text="Settings" />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-72 sm:w-64 bg-white dark:bg-gray-800 shadow-xl 
                     rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-4 z-50 
                     transition-all duration-300 transform origin-top scale-100 hover:scale-[1.01]"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--text-color)",
            borderColor: "rgba(0,0,0,0.15)",
          }}
        >
          {/* User Info */}
          <div className="flex items-center  justify-around space-x-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
               Name : {userData?.name || 'Demo'}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Bamil :{ userData?.email || 'demoEmail@Bmail.com'}
              </span>
            </div>
          </div>

          {/* Manage Account Button */}
          <button
            className="w-full py-2 px-3 rounded-lg text-sm font-medium 
                       bg-[var(--btn-bg)] text-[var(--btn-text)]
                       transition-all duration-300 shadow-sm
                       hover:bg-blue-600 hover:text-white hover:shadow-blue-400/40 hover:scale-[1.02]
                       active:scale-[0.98]"
          >
            Manage Your Account
          </button>

          {/* Account Actions */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleAddAccount}
              className="cursor-pointer w-full py-2 rounded-lg text-sm font-medium 
                         bg-[var(--btn-bg)] text-[var(--btn-text)]
                         transition-all duration-300 shadow-sm
                         hover:bg-green-600 hover:text-white hover:shadow-green-400/40 hover:scale-[1.02]
                         active:scale-[0.98]"
            >
              Add Account
            </button>

            <button
              onClick={logOutUser}
              className="cursor-pointer w-full py-2 rounded-lg text-sm font-medium 
                         bg-[var(--btn-bg)] text-[var(--btn-text)]
                         transition-all duration-300 shadow-sm
                         hover:bg-red-600 hover:text-white hover:shadow-red-400/40 hover:scale-[1.02]
                         active:scale-[0.98]"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
