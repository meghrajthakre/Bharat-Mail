import React, { useContext } from "react";
import { useAppContext } from "../Context/AppContext"; // <- context import

const OpenMailTemplate = () => {
    const {mail, setSelectMailId} = useAppContext()

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
                    onClick={() => setSelectMailId(null)}
                    className="cursor-pointer text-blue-600"
                    
                >
                     ← Back 
                </button>
               
            </div>

            {/* Mail Info */}
             <h1 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
                    {mail.subject}
                </h1>


            <div 
                className="w-full border-b mt-2 pb-4 mb-4 flex items-center justify-between px-2"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
            >
                <div className="flex flex-col">
                    <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                        <strong>From:</strong>  {mail.sender}
                    </p>

                    <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                        <strong>To:</strong> you
                    </p>
                </div>

                <p className="text-xs mt-1" style={{ color: 'var(--secondary-text)' }}>
                    {mail.time}
                </p>
            </div>

            {/* Mail Body */}
            <div 
                className="px-2 leading-relaxed whitespace-pre-wrap "
                style={{ color: 'var(--text-color)' }}
            >
               {mail.message}
            </div>
        </div>
    );
};

export default OpenMailTemplate;
