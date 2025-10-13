import React from "react";

const ComposePage = () => {
    return (
        <div
            className="hidden absolute bottom-3 right-10 md:absolute md:bottom-5  md:right-5 
                       w-[80%] sm:w-[480px] md:w-[520px] 
                       sm:h-[520px] rounded-2xl shadow-lg  transition-all duration-300"
            style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
                Color: "var(--secondary-text)",
            }}
        >
            {/* Header */}
            <div
                className="flex justify-between items-center px-4 py-3 rounded-t-2xl"
                style={{
                    backgroundColor: "var(--header-bg)",
                    color: "var(--secondary-text)",
                }}
            >
                <h2 className="font-semibold text-lg">New Message</h2>
                <button
                    className="cursor-pointer text-[var(--secondary-text)] hover:opacity-80 transition"
                    title="Close"
                >
                    ✖
                </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
                {/* To */}
                <input
                    type="email"
                    placeholder="To"
                    className="w-full p-2 rounded-md outline-none "
                    style={{
                        backgroundColor: "var(--search-bg)",
                        color: "var(--text-color)",
                    }}
                />

                {/* Subject */}
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 rounded-md outline-none "
                    style={{
                        backgroundColor: "var(--search-bg)",
                        Color: "var(--secondary-text)",
                        color: "var(--text-color)",
                    }}
                />

                {/* Message */}
                <textarea
                    placeholder="Write your message..."
                    className="w-full h-[20vh] md:h-64 p-3 rounded-md resize-none outline-none "
                    style={{
                        backgroundColor: "var(--search-bg)",
                        Color: "var(--secondary-text)",
                        color: "var(--text-color)",
                    }}
                ></textarea>
            </div>

            {/* Footer */}
            <div
                className="flex justify-end px-4 py-3 rounded-b-2xl"
                style={{
                    backgroundColor: "var(--header-bg)",
                }}
            >
                <button
                    className="cursor-pointer px-6 py-2 rounded-lg font-medium hover:scale-105 hover:opacity-80 transition-all duration-200"
                    style={{
                        backgroundColor: "var(--btn-bg)",
                        color: "var(--btn-text)",
                    }}
                >
                    Send ✉️
                </button>
            </div>
        </div>
    );
};

export default ComposePage;
