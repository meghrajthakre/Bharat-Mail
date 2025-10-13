import React from 'react';
import ComposePage from './ComposePage';

const ComposeButton = () => {
    return (
        <div className='mt-5'>

            <button
                className=" compose-btn flex items-center gap-2 rounded-full 
                       bg-[#eaf1fb] text-[#0b2540] font-medium
                       px-2 py-1 text-sm        /* mobile default */
                       sm:px-4 sm:py-2 sm:text-base  /* tablet/desktop */
                       hover:bg-[#dce6f5] hover:shadow-md transition"
            >
                {/* Icon */}
                <span className="flex items-center justify-center 
                             w-4 h-4 sm:w-5 sm:h-5">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#0b2540" />
                        <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#0b2540" />
                    </svg>
                </span>

                {/* Text */}
                <span className='hidden sm:inline'>compose</span>
            </button>

        </div>

    )
}

export default ComposeButton;
