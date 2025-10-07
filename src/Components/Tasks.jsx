import React from "react";
import { Icon } from "@iconify/react";

const Tasks = () => {
    return (
        <div className="relative group cursor-pointer   p-2 hover:bg-gray-100 rounded-full">
            {/* Tasks icon */}
            <Icon icon="mdi:check-circle-outline" width="25" height="25" color="#1A73E8" />

            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                             hidden group-hover:block
                             bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Todos
            </span>
        </div>
    );
};

export default Tasks;
