import React from "react";
import MainData from "../Data/MainData";
import { useAppContext } from "../Context/AppContext"; // <- context import
import OpenInbox from '../Components/OpenInbox'

const Inbox = () => {
  const { active ,mail, setSelectMailId} = useAppContext(); // <- context se active folder le liya
  
  
  if(mail){
    return <OpenInbox/>
  }

  const filterData = MainData.filter((msg) => {
    if (active === "Inbox") return true;
    if (active === "Starred") return msg.folder === "Starred";
    if (active === "Snoozed") return msg.folder === "Snoozed";
    if (active === "Sent") return msg.folder === "Sent";
    if (active === "Drafts") return msg.folder === "Drafts";
    if (active === "Purchase") return msg.folder === "Purchase";
    // category filter
    return msg.category === active;
  });


  return (
    <div className="w-full mx-auto rounded-xl mt-2 ">
      {
        filterData.length == 0 ?
          (
            <div className="text-center text-gray-500 py-10">
              No mails in {active} folder
            </div>
          ) : (
            filterData.map((items, index) => (
              <div key={index}>
                {/* Single Message */}
                <div
                  className="
                      flex flex-col sm:flex-row justify-between items-start 
                      sm:items-center gap-1 sm:gap-0
                      px-3 sm:px-5 py-3
                      rounded
                      InboxMessage
                      cursor-pointer transition
            "     onClick={() => setSelectMailId(items.id)}
                >
                  {/* Left Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto">

                    {/* Sender */}
                    <div className="flex items-center sm:w-[150px]">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        {items.sender}
                      </h3>
                    </div>

                    {/* Subject */}
                    <div className="sm:w-[200px] w-full truncate">
                      <p className="text-gray-500 font-medium  text-sm sm:text-base truncate">
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
            ))
          )
      }


    </div>
  );
};

export default Inbox;
