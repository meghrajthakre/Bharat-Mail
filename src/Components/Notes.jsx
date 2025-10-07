import { Icon } from "@iconify/react";
import React from "react";

const Notes = () => {
  return (
    <div className="relative group cursor-pointer p-2 hover:bg-gray-100 rounded-full">
      <Icon icon="logos:google-keep" width="25" height="25" />

      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                       hidden group-hover:block
                       bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        Notes
      </span>
    </div>
  );
};

export default Notes;
