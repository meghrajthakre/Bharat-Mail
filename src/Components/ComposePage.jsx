import React from "react";
import { useAppContext } from "../Context/AppContext";

const ComposePage = () => {
  const { setOpenCompose, openCompose } = useAppContext();

  return (
    <>


      {/* Compose Page */}
      {openCompose && (
        <div
          className="fixed bottom-5 right-5 z-50 w-[90%] sm:w-[480px] md:w-[520px]
                     h-[80%] sm:h-[520px] rounded-2xl shadow-xl
                     flex flex-col bg-[var(--bg-color)] text-[var(--text-color)]
                     transform transition-all duration-300 ease-out
                     animate-slide-up"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3 rounded-t-2xl"
            style={{ backgroundColor: "var(--header-bg)", color: "var(--secondary-text)" }}
          >
            <h2 className="font-semibold text-lg">New Message</h2>
            <button
              className="cursor-pointer hover:opacity-80 transition text-[var(--secondary-text)]"
              onClick={() => setOpenCompose(false)}
              title="Close"
            >
              ✖
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 flex-1 overflow-y-auto">
            <input
              type="email"
              placeholder="To"
              className="w-full p-2 rounded-md outline-none"
              style={{ backgroundColor: "var(--search-bg)", color: "var(--text-color)" }}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 rounded-md outline-none"
              style={{ backgroundColor: "var(--search-bg)", color: "var(--text-color)" }}
            />
            <textarea
              placeholder="Write your message..."
              className="w-full h-[30%] sm:h-40 md:h-64 p-3 rounded-md resize-none outline-none"
              style={{ backgroundColor: "var(--search-bg)", color: "var(--text-color)" }}
            />
          </div>

          {/* Footer */}
          <div
            className="flex justify-end px-4 py-3 rounded-b-2xl"
            style={{ backgroundColor: "var(--header-bg)" }}
          >
            <button
              className="cursor-pointer px-6 py-2 rounded-lg font-medium hover:scale-105 hover:opacity-80 transition-all duration-200"
              style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
            >
              Send ✉️
            </button>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slide-up {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
};

export default ComposePage;
