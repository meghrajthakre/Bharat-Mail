import React, { useState } from "react";
import categoriesData from "../Data/categoriesData";
import MainData from "../Data/MainData";
import Inbox from "./Inbox";

const Categories = () => {
    const [active, setActive] = useState("Primary");

    return (
        <>
            <div
                className="
             
                flex items-center justify-between 
                border-b-2 border-gray-100
                sm:justify-start sm:gap-2 md:gap-6 lg:gap-10
                px-2 sm:px-4 md:px-6  
        "
            >
                {categoriesData.map(({ id, name, icon: Icon, color }) => (
                    <div
                        key={id}
                        onClick={() => setActive(name)}
                        className={`
                                flex-shrink-0 flex items-center gap-2 sm:gap-3
                                px-3  sm:px-4 md:px-5 py-2 rounded-b-none cursor-pointer
                                hover:scale-105 transition hover:bg-gray-100
                                ${active === name
                                ? "border-b-4 border-blue-500  "
                                : "text-gray-600"
                            }
            `}
                    >
                        <Icon size={18} className="w-3 h-3 md:w-5 md:h-5" color={color} />
                        <p
                            className={`text-xs sm:text-sm md:text-base ${active === name ? "font-semibold" : "font-medium text-gray-500"
                                }`}
                        >
                            {name}
                        </p>
                    </div>
                ))}
            </div>

            <div className="px-2 sm:px-4 md:px-6">
                <Inbox active={active} />
            </div>
        </>
    );
};

export default Categories;
