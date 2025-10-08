import React from 'react';
import ComposeButton from './ComposeButton';
import { useAppContext } from '../Context/AppContext';
import leftCategoriesData from './../Data/leftCategoriesData';
import MainData from '../Data/MainData';

const LeftSideBar = () => {
  const { open, setOpen, active, setActive } = useAppContext();

  const handleClick = (name) => {
    setActive(name)

    if (window.innerWidth < 640) {
         setOpen(false);
    }
  }

  return (
    <div className={`fixed top-[48px] left-0 h-[90%] w-60 bg-[#F8FAFD]
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    sm:translate-x-0 sm:block`}>
      <ComposeButton />

      <div className="p-4 py-6 flex gap-2 flex-col space-y-1">
        {leftCategoriesData.map(({ id, name, icon: Icon, color, bg }) => (
          <div
            key={id}
            onClick={() => handleClick(name)}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition 
              ${active === name ? "bg-[#D3E3FE] text-black font-semibold " : "hover:bg-gray-100"}
            `}
          >
            <Icon className="w-5 h-5" color={active === name ? color : "#6B7280"} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>



    </div>
  );
}

export default LeftSideBar;
