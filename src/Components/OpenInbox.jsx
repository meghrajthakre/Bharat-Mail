import React from "react";

const OpenMailTemplate = () => {
    return (
        <div 
            className="w-full h-screen p-6"
            style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-color)',
                transition: 'background-color 0.3s, color 0.3s'
            }}
        >
            {/* Top Bar */}
            <div className="flex items-center gap-4 mb-6">
                <button 
                    className="cursor-pointer"
                    style={{ color: 'var(--btn-text)' }}
                >
                    ← Back
                </button>
                <h1 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
                    Your DSA Plan
                </h1>
            </div>

            {/* Mail Info */}
            <div 
                className="w-full border-b pb-4 mb-4 flex items-center justify-between px-2"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
            >
                <div className="flex flex-col">
                    <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                        <strong>From:</strong> Akshay Saini
                    </p>

                    <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                        <strong>To:</strong> you
                    </p>
                </div>

                <p className="text-xs mt-1" style={{ color: 'var(--secondary-text)' }}>
                    10:30 AM
                </p>
            </div>

            {/* Mail Body */}
            <div 
                className="px-2 leading-relaxed whitespace-pre-wrap"
                style={{ color: 'var(--text-color)' }}
            >
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
