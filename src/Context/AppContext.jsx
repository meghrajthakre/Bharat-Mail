import React, { createContext, useContext, useState } from "react";
import MainData from "../Data/MainData";

// 1️⃣ Context banao
const AppContext = createContext();

// 2️⃣ Provider
export const AppProvider = ({ children }) => {
  // header ke liye open state
  const [open, setOpen] = useState(false);

  // active folder ke liye state
  const [active, setActive] = useState("Inbox");

  const [selectMailId , setSelectMailId] = useState(null)
  
  
  const mail = MainData.find((mail) => mail.id == selectMailId);

  return (
    <AppContext.Provider value={{ open, setOpen, active, setActive , setSelectMailId,mail}}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useAppContext = () => useContext(AppContext);
