import React, { useState } from 'react';

const ProfilePage = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left ">
            {/* Profile Avatar */}
            <img
                onClick={() => setOpen(!open)}
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                alt="Profile"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-400 transition-all"
            />

            {/* Dropdown Menu */}
            {open && (
                <div
                    className="absolute right-8 mt-2 w-70 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700  p-4 space-y-4 z-101"
                    style={{
                        backgroundColor: "var(--header-bg)",
                        color: "var(--text-color)",
                        borderColor: "rgba(0,0,0,0.15)"
                    }}
                >
                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                            alt="Profile"
                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">Hii' Meghraj</span>
                            <span className="text-xs text-gray-500">{`meghrajthakre@gmail.com`}</span>
                        </div>
                    </div>

                    {/* Account Actions */}
                    <button
                        className="w-full py-2 px-3 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all"
                        style={{
                            backgroundColor: "var(--btn-bg)",
                            color: "var(--btn-text)"
                        }}
                    >
                        Manage Your Account
                    </button>

                    <div className="flex justify-between space-x-2">
                        <button
                            className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all"
                            style={{
                                backgroundColor: "var(--btn-bg)",
                                color: "var(--btn-text)"
                            }}
                        >
                            Add Account
                        </button>
                        <button
                            className="cursor-pointer flex-1 py-2 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all"
                            style={{
                                backgroundColor: "var(--btn-bg)",
                                color: "var(--btn-text)"
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
