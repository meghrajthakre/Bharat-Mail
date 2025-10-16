import React, { createContext, useContext, useEffect, useState } from "react";
import MainData from "../Data/MainData";

// 1️⃣ Context banao
const AppContext = createContext();

// 2️⃣ Provider
export const AppProvider = ({ children }) => {
  // header ke liye open state
  const [open, setOpen] = useState(false);
  // active folder ke liye state
  const [active, setActive] = useState("Inbox");

  useEffect(() => {
    setSelectMailId(null)
  }, [active])

  const [selectMailId, setSelectMailId] = useState(null)
  const mail = MainData.find((mail) => mail.id == selectMailId);
  

  // compose btn 
    const [openCompose ,  setOpenCompose ] = useState(false)


  return (
    <AppContext.Provider value={{ open, setOpen, active, setActive, setSelectMailId, mail,
      setOpenCompose , openCompose
     }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useAppContext = () => useContext(AppContext);
