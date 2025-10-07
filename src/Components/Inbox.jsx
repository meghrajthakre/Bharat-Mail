import React from 'react';
import MainData from '../Data/MainData';

const Inbox = ({ active }) => {
  const filterData = MainData.filter((msg) => msg.category === active);

  return (
    <div className="w-full mx-auto rounded-xl mt-4 ">
      {filterData.map((items, index) => (
        <div key={index}>
          {/* Single Message */}
          <div
            className="
              flex flex-col sm:flex-row justify-between items-start 
              sm:items-center gap-1 sm:gap-0
              px-3 sm:px-5 py-3 border-b border-gray-50
              hover:bg-gray-100 cursor-pointer transition
            "
          >
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto">
              
              {/* Sender */}
              <div className="flex items-center sm:w-[150px]">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                  {items.sender}
                </h3>
              </div>

              {/* Subject */}
              <div className="sm:w-[200px] w-full truncate">
                <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
                  {items.subject}
                </p>
              </div>

              {/* Message Preview */}
              <div className="sm:w-[500px] w-full">
                <p className="text-gray-500 text-xs sm:text-sm truncate">
                  {items.message}
                </p>
              </div>
            </div>

            {/* Right: Time */}
            <div className="text-gray-500 text-xs sm:text-sm sm:ml-4 flex-shrink-0">
              {items.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
