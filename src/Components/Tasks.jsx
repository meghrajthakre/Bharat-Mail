import React, { useEffect, useState } from "react";
import TasksIcons from "./TasksIcons";
import Taskscard from "./Taskscard";

const Tasks = ({ isOpen, onToggle }) => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [localItem, setLocalitems] = useState([]);

  // Load tasks from localStorage safely
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setLocalitems(saved);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(localItem));
  }, [localItem]);

  // Add new task
  const handleAdd = () => {
    if (!title.trim() || !input.trim()) {
      alert("Please enter both title and task");
      return;
    }

    const obj = {
      id: Date.now(),
      title,
      task: input,
    };

    setLocalitems((prev) => [obj, ...prev]);
    setInput("");
    setTitle("");
    setOpen(false);
  };

  // Delete a task
  const handleDelete = (id) => {
    const filter = localItem.filter((item) => item.id !== id);
    setLocalitems(filter);
  };

  return (
    <div className={`relative`}>
      {/* Task Icon / Toggle */}
      <TasksIcons setOpenTask={onToggle} opentask={isOpen} />

      {isOpen && (
        <div
          className={`absolute top-0 right-14 w-72 sm:w-80 rounded-2xl shadow-xl border z-[101] p-5 
            transition-all duration-500 ease-in-out transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
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
              Tasks
            </p>
            <h2 className="text-sm font-semibold tracking-[2px]">Add Tasks</h2>
          </div>

          {/* Input Section */}
          {!open ? (
            <div
              onClick={() => setOpen(true)}
              className="border border-gray-300 rounded-lg p-2 text-sm text-gray-500 
                hover:border-blue-400 hover:bg-gray-50 cursor-text 
                transition-all duration-300 hover:scale-[1.02] flex justify-between items-center"
            >
              <span>Add Task</span>
              <span className="text-blue-500 font-bold">+</span>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border w-full border-gray-300 rounded-lg p-2 text-sm outline-none 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write your Tasks..."
                className="resize-none w-full h-24 border border-gray-300 focus:border-green-500 
                  focus:ring-2 focus:ring-green-200 outline-none rounded-lg p-2 text-sm transition-all duration-300 placeholder-gray-400"
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-3">
                <button
                  className="px-3 cursor-pointer py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}
                  onClick={() => setOpen(false)}
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
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}
                  onClick={handleAdd}
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

          {/* Tasks List (always visible) */}
          <div className="mt-4 space-y-3 max-h-36 overflow-y-auto">
            {localItem.length > 0 ? (
              localItem.map((item) => (
                <Taskscard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  task={item.task}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-xs text-gray-400 italic text-center">
                No Tasks yet...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
