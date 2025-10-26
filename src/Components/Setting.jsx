import { Settings } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { useLogin } from '../Context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const { userData, logOutUser } = useLogin();
  const navigate = useNavigate()
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
    navigate('/')
  }

  const TooltipIcon = ({ icon: Icon, text }) => (
    <div className="relative group flex items-center">
      <Icon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
      <span className="absolute z-100 top-full mt-2 left-1/2 -translate-x-1/2
                    bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md
                    opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {text}
      </span>
    </div>
  );

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)}>
        <TooltipIcon icon={Settings} text="Settings" />
      </div>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-72 sm:w-64 bg-white dark:bg-gray-800 shadow-lg 
                     rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-4 z-50 transition-all"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--text-color)",
            borderColor: "rgba(0,0,0,0.15)",
          }}
        >
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {userData?.name || 'Demo'}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {userData?.email || 'demoEmail@Bmail.com'}
              </span>
            </div>
          </div>

          {/* Account Actions */}
          <button
            className="w-full py-2 px-3 rounded-lg text-sm font-medium 
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
            }}
          >
            Manage Your Account
          </button>

          <div className="flex flex-col gap-1.5">
            <button
              className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium 
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
              }}
              onClick={handleAddAccount}
            >
              Add Account
            </button>
            <button
              className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium 
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
              }}
              onClick={logOutUser}
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
