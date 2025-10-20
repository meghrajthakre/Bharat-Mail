import React, { useEffect, useState } from "react";
import CalenderIcon from "./CalenderIcon";
import ReminderCard from "./ReminderCard";

const Calendar = () => {
  const [openCal, setOpenCal] = useState(false);
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [textAreaVal, setTextAreaVal] = useState("");
  const [itemsLocal, setItemsLocal] = useState([]);

  // 🟢 Load existing reminders from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reminders")) || [];
    setItemsLocal(saved);
  }, []);

  // 🟢 Save reminders to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(itemsLocal));
  }, [itemsLocal]);

  // 🟢 Handle adding a new reminder
  const handleAddReminder = () => {
    if (!textAreaVal.trim()) return; // skip empty entries

    const newReminder = { id: Date.now(), name: textAreaVal, date };
    const updatedReminders = [...itemsLocal, newReminder];
    setItemsLocal(updatedReminders);
    setTextAreaVal(""); // clear input
  };
  const handleDelete = (id) => {
    const filtered = itemsLocal.filter((item) => item.id !== id);
    setItemsLocal(filtered);
  };

  return (
    <div
      className={`relative ${openCal ? "border-l-4 border-blue-500" : "text-gray-600"
        }`}
    >
      {/* Calendar Icon */}
      <CalenderIcon setOpenCal={setOpenCal} openCal={openCal} />

      {/* Calendar Popup */}
      {openCal && (
        <div
          className="absolute top-0 right-14 w-72 sm:w-80 rounded-xl shadow-lg p-4 border z-[101] transition-all duration-300"
          style={{
            backgroundColor: "var(--header-bg)",
            borderColor: "rgba(0,0,0,0.1)",
            color: "var(--text-color)",
          }}
        >
          <h2 className="text-sm mb-3 uppercase tracking-[5px] font-medium">
            Calendar
          </h2>

          {/* Date Picker */}
          <div className="flex flex-col">
            <h3 className="text-xs uppercase tracking-wider mb-1">
              Pick a date
            </h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onClick={(e) => e.target.showPicker()}
              className="text-green-400 cursor-pointer w-[130px] p-2 border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-green-400 hover:border-green-400 hover:shadow-md"
              style={{
                color: "#4ade80",
                borderColor: "rgba(0,0,0,0.1)",
              }}
            />

            {/* Reminder Input */}
            <div className="flex flex-col">
              <h3 className="text-xs uppercase tracking-wider mt-3 mb-1">
                Reminder
              </h3>
              <textarea
                value={textAreaVal}
                onChange={(e) => setTextAreaVal(e.target.value)}
                placeholder="Write your reminder..."
                className="resize-none w-full h-20 rounded-md p-2 text-sm focus:outline-none focus:ring-1 transition-all duration-200"
                style={{
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-color)",
                  borderColor: "rgba(0,0,0,0.2)",
                  borderWidth: "1px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--btn-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")
                }
              ></textarea>
            </div>

            {/* Add Reminder Button */}
            <button
              onClick={handleAddReminder}
              className="mt-3 cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium transition"
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
              Add Reminder
            </button>

            {/* Display all reminders */}
            <div className="mt-4 space-y-3 max-h-56 overflow-y-auto ">
              {itemsLocal.length > 0 ? (
                itemsLocal.map((item,i) => (
                  <>
                    <ReminderCard
                      key={i}
                      handleDelete={handleDelete}
                      id={item.id}
                      date={item.date}
                      text={item.name} />

                  </>

                ))
              ) : (
                <p className="text-xs text-gray-400 italic">
                  No reminders yet...
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              className="mt-4 cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium transition"
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-text)",
              }}
              onClick={() => setOpenCal(false)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "red")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--btn-bg)")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
