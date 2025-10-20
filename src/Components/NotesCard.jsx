import React from 'react'
import { Trash2 } from "lucide-react";
const NotesCard = ({handleDelete,notes, title ,id}) => {
  return (
    <div>
       <div
      className="w-full p-3 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: "var(--input-bg)",
        borderColor: "rgba(0,0,0,0.15)",
        color: "var(--text-color)",
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{title}</span>
        <Trash2
          size={16}
          className="cursor-pointer hover:text-red-400 transition-colors"
          onClick={() => handleDelete(id)}
        />
      </div>
      <p className="text-sm leading-snug break-words">{notes}</p>
    </div>
    </div>
  )
}

export default NotesCard
