import React, { useState } from 'react';
import { useLogin } from '../../Context/LoginContext';

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { userData, logOutUser } = useLogin();

  // Fallback image (jab avatar null ho)
  const avatar = userData?.avatar || "https://via.placeholder.com/80";

  return (
    <div className="relative inline-block text-left">
      {/* Profile Avatar */}
      <img
        onClick={() => setOpen(!open)}
        src={avatar}
        alt={userData?.name || "User"}
        className="w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 rounded-full object-cover 
                   cursor-pointer border-2 border-gray-300 hover:border-blue-400 
                   transition-all duration-300 transform hover:scale-105 shadow-sm"
      />

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-72 bg-white dark:bg-gray-800 shadow-xl 
                     rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-4 z-[999]"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--text-color)",
            borderColor: "rgba(0,0,0,0.15)",
          }}
        >
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <img
              src={avatar}
              alt={userData?.name || "User"}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 
                         border-gray-300 shadow-md object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                Hii, {userData?.name || "User"}
              </span>
              <span className="text-xs text-gray-500">
                {userData?.email || ""}
              </span>
            </div>
          </div>

          {/* Account Actions */}
          <button
            className="w-full py-2 px-3 rounded-lg text-sm font-medium 
                       hover:scale-[1.02] transition-all duration-200 shadow-sm"
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
            }}
          >
            Manage Your Account
          </button>

          <div className="flex justify-between space-x-2">
            <button
              className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium 
                         hover:scale-[1.02] transition-all duration-200 shadow-sm"
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
              }}
            >
              Add Account
            </button>
            <button
              onClick={logOutUser}
              className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium 
                         hover:scale-[1.02] transition-all duration-200 shadow-sm"
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
