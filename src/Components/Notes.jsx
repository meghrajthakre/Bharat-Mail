import React, { useEffect, useState } from "react";
import NotesIcon from "./NotesIcon";
import NotesCard from "./NotesCard";

const Notes = () => {
  const [openNote, setOpenNote] = useState(false)
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [localItems, setLocalitems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notesData")) || [];
    setLocalitems(saved);
  }, []);

  // Save to localStorage whenever list updates
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(localItems));
  }, [localItems]);

  // ✅ Add new note
  const handleAdd = () => {
    if (!title.trim() && !input.trim()) return;

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      notes: input.trim(),
    };

    setLocalitems((prev) => [newNote, ...prev]);
    setTitle("");
    setInput("");
    setOpen(false);
  };

  // ✅ Delete note
  const handleDelete = (id) => {
    const updated = localItems.filter((item) => item.id !== id);
    setLocalitems(updated);
  };

  return (
    <div
      className={`relative ${openNote ? "border-l-4 border-blue-500" : "text-gray-600"
        }`}
    >
      {/* Notes Icon */}
      <NotesIcon setOpenNote={setOpenNote} openNote={openNote} />

      {/* Notes Popup */}
      {
        openNote &&
        (
          <div
            className={`absolute top-0 right-14 w-72 sm:w-80 rounded-2xl shadow-xl border z-[101] p-5 
        transition-all duration-500 ease-in-out transform ${openNote
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-95"
              }`}
            style={{
              backgroundColor: "var(--header-bg)",
              borderColor: "rgba(0,0,0,0.15)",
              color: "var(--text-color)",
            }}
          >
            {/* Header */}
            <div className="mb-3 transition-all duration-300">
              <p className="text-[11px] uppercase tracking-[3px] text-gray-400 mb-1">
                Keep
              </p>
              <h2 className="text-sm font-semibold tracking-[2px]">Notes</h2>
            </div>

            {/* Input Section */}
            {!open ? (
              <div
                onClick={() => setOpen(true)}
                className="border border-gray-300 rounded-lg p-2 text-sm text-gray-500 hover:border-blue-400 hover:bg-gray-50 cursor-text transition-all duration-300 hover:scale-[1.02]"
              >
                Take a note...
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="border w-full border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write your notes..."
                  className="resize-none w-full h-24 border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-lg p-2 text-sm transition-all duration-300 placeholder-gray-400"
                ></textarea>

                {/* Buttons */}
                <div className="flex justify-end space-x-3 mt-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-3 cursor-pointer  py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--btn-bg)",
                      color: "var(--btn-text)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "red")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--btn-bg)")
                    }
                  >
                    Close
                  </button>
                  <button
                    onClick={handleAdd}
                    className="cursor-pointer px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "var(--btn-bg)",
                      color: "var(--btn-text)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--btn-bg)")
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {/* Notes List */}
            <div className="mt-4 space-y-3 max-h-56 overflow-y-auto">
              {localItems.length > 0 ? (
                localItems.map((item) => (
                  <NotesCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    notes={item.notes}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <p className="text-xs text-gray-400 italic text-center">
                  No notes yet...
                </p>
              )}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Notes;
