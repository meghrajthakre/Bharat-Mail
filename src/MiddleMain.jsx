import React from 'react';
import Categories from './Components/Categories';


const MiddleMain = ({ open }) => {
  return (
    <div
      className={`
        rounded-2xl transition-all duration-300 overflow-auto no-scrollbar
        // ✅ Desktop positioning (unchanged)
        sm:absolute left-[240px]
        sm:w-[calc(100%-260px)] md:w-[calc(100%-280px)] lg:w-[calc(100%-330px)]
        sm:h-[calc(100%-75px)] md:h-[calc(100%-100px)]

        // ✅ Mobile adjustment only
        h-[calc(100vh-100px)] w-full
        px-2 sm:p-4 

        // ✅ Sidebar animation
        ${open ? 'sm:ml-60' : 'sm:ml-0'}
      `}
    >
      <div className="min-w-full">
        <Categories />
        {/* <OpenMailTemplate/> */}
      </div>
    </div>
  );
};

export default MiddleMain;
