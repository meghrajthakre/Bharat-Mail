import React from 'react';
import ComposeButton from './ComposeButton';
import { Inbox, Star, Clock, Send, FileText, MoreHorizontal } from "lucide-react";

const LeftSideBar = ({ open }) => {
  return (
    <div className={`fixed top-[60px] left-0 h-[90%] w-60 bg-[#F8FAFD]
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    sm:translate-x-0 sm:block`}>
      <ComposeButton />

      <div className="p-4 space-y-2">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <Inbox className="w-5 h-5 text-gray-600" /> <span className="text-sm">Inbox</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <Star className="w-5 h-5 text-gray-600" /> <span className="text-sm">Starred</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <Clock className="w-5 h-5 text-gray-600" /> <span className="text-sm">Snoozed</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <Send className="w-5 h-5 text-gray-600" /> <span className="text-sm">Sent</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <FileText className="w-5 h-5 text-gray-600" /> <span className="text-sm">Drafts</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <MoreHorizontal className="w-5 h-5 text-gray-600" /> <span className="text-sm">More</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
