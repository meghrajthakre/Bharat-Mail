import React from "react";
import { Trash2 } from "lucide-react";

const ReminderCard = ({ date, text, handleDelete, id }) => {
  return (
    <div
      className="w-full p-3 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: "var(--input-bg)",
        borderColor: "rgba(0,0,0,0.15)",
        color: "var(--text-color)",
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{date}</span>
        <Trash2
          size={16}
          className="cursor-pointer hover:text-red-400 transition-colors"
          onClick={() => handleDelete(id)}
        />
      </div>
      <p className="text-sm leading-snug break-words">{text}</p>
    </div>
  );
};

export default ReminderCard;
