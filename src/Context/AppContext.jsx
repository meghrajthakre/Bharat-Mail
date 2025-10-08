import React, { createContext, useContext, useState } from "react";

// 1️⃣ Context banao
const AppContext = createContext();

// 2️⃣ Provider
export const AppProvider = ({ children }) => {
  // header ke liye open state
  const [open, setOpen] = useState(false);

  // active folder ke liye state
  const [active, setActive] = useState("Primary");

  // active folder ke liye state
  const [leftActive, setLeftActive] = useState('Inbox');

  return (
    <AppContext.Provider value={{ open, setOpen, active, setActive ,setLeftActive,leftActive}}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useAppContext = () => useContext(AppContext);
