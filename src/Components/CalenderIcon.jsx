import React from 'react'
import { Icon } from "@iconify/react";

const CalenderIcon = ({openCal , setOpenCal}) => {
    
    return (
        <div>
            <div
                className="relative group cursor-pointer p-2 flex items-center justify-center transition-transform hover:scale-110"
                onClick={() => setOpenCal(!openCal)}
            >
                <Icon icon="logos:google-calendar" width="25" height="28" />


                {/* Tooltip */}
                <span
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                     hidden group-hover:block
                     text-xs px-2 py-1 rounded whitespace-nowrap z-10 shadow-md"
                    style={{
                        backgroundColor: "var(--header-bg)",
                        color: "var(--text-color)",
                    }}
                >
                    Calendar
                </span>
            </div>
        </div>
    )
}

export default CalenderIcon
