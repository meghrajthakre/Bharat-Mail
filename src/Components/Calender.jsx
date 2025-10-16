import React, { useState } from "react";
import CalenderIcon from "./CalenderIcon";

const Calendar = () => {
  const [openCal, setOpenCal] = useState(false);
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
 

  return (
    <div
      className={`relative ${openCal ? "border-l-4 border-blue-500" : "text-gray-600"
        }`}
    >
      {/* Calendar Icon */}
      <CalenderIcon setOpenCal={setOpenCal} openCal={openCal}/>

      {/* Calendar Popup */}
      {openCal && (
        <div
          className="absolute top-0 right-13 w-72 sm:w-80 rounded-xl shadow-lg p-4 border z-[101] transition-all duration-300"
          style={{
            backgroundColor: "var(--header-bg)",
            borderColor: "rgba(0,0,0,0.1)",
            color: "var(--text-color)",
          }}
        >
          <h2 className="text-sm mb-2 uppercase tracking-[5px]">
            Calendar
          </h2>

         
            <>
              <div className="flex flex-col ">

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onClick={(e) => e.target.showPicker()}
                  className=" text-green-400  cursor-pointer w-[130px] p-2 border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-green-400 custom-date hover:border-green-400 hover:shadow-md "
                  style={{
                    color: "#4ade80",
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                />

                <button
                  className="mt-3 cursor-pointer  px-4 py-1.5 rounded-md text-sm font-medium transition  "
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}
                  onClick={() => setOpenCal(false)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--btn-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--btn-bg)")
                  }
                >
                  Close
                </button>

                  

              </div>
            </>
        </div>
      )}
    </div>
  );
};

export default Calendar;
