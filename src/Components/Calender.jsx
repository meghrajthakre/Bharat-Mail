import React from "react";
import { Icon } from "@iconify/react";

const Calender = () => {
  return (
    <div className="">
      <div className=" relative group cursor-pointer p-2 hover:bg-gray-100 rounded-full">
      <Icon icon="logos:google-calendar" width="25" height="25" />

      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                       hidden group-hover:block
                       bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        Calendar
      </span>


      <div className="w-80 h-80 bg-red-500 absolute right-20 z-101 top-0">
        <input type="date" />
      </div>

    </div>
    </div>
  );
};

export default Calender;
