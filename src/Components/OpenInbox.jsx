import React from "react";

const OpenMailTemplate = () => {
    return (
        <div className="w-full h-screen bg-white p-6">
            {/* Top Bar */}
            <div className="flex items-center gap-4 mb-6">
                <button className="text-blue-500 hover:underline cursor-pointer">← Back</button>
                <h1 className="text-2xl font-bold">Your DSA Plan</h1>
            </div>

            {/* Mail Info */}
            <div className="w-full border-b border-gray-200 pb-4 mb-4 flex items-center justify-between px-2 ">
                <div className="flex flex-col ">
                    <p className="text-sm text-gray-700">
                        <strong>From:</strong> Akshay Saini
                    </p>


                    <p className="text-sm text-gray-700">
                        <strong>To:</strong> you
                    </p>
                </div>


                <p className="text-xs text-gray-500 mt-1">10:30 AM</p>

            </div>

            {/* Mail Body */}
            <div className="text-gray-800 px-2 leading-relaxed whitespace-pre-wrap">
                Hey Meghraj,

                Here’s your complete 90-day DSA plan.
                Keep coding daily! 💪

                Good luck!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam facere quibusdam voluptatem quasi ut ducimus iure aliquid eos amet magni aliquam nam maiores ipsa, sint nihil inventore impedit numquam molestiae necessitatibus quisquam? Voluptates perspiciatis fuga animi itaque reprehenderit sapiente maiores fugiat maxime consequatur, illo eaque architecto aliquid pariatur impedit modi ab ducimus voluptatibus. Dignissimos nulla sit asperiores, eligendi incidunt inventore beatae deleniti. Nesciunt maiores sit aliquid hic, rerum consectetur eaque 
            </div>
        </div>
    );
};

export default OpenMailTemplate;
