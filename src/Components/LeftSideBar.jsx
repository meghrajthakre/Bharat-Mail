import React from 'react';
import ComposeButton from './ComposeButton';
import { useAppContext } from '../Context/AppContext';
import leftCategoriesData from './../Data/leftCategoriesData';

const LeftSideBar = () => {
  const { open } = useAppContext()
  const { leftActive, setLeftActive } = useAppContext();

  return (
    <div className={`fixed top-[48px] left-0 h-[90%] w-60 bg-[#F8FAFD]
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    sm:translate-x-0 sm:block`}>
      <ComposeButton />

      <div className="p-4 py-6 flex gap-2 flex-col space-y-1">
        {leftCategoriesData.map(({ id, name, icon: Icon, color ,bg}) => (
          <div
            key={id}
            onClick={() => setLeftActive(name)}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition 
              ${leftActive === name ? "bg-[#D3E3FE] text-black font-semibold " : "hover:bg-gray-100"}
            `}
          >
            <Icon className="w-5 h-5"   color={leftActive === name ? color : "#6B7280"} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>



    </div>
  );
}

export default LeftSideBar;
