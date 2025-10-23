import React from "react";
import Header from "./Components/Header";
import ComposePage from "./Components/ComposePage";
import MiddleMain from "./MiddleMain";
import { useAppContext } from "./Context/AppContext";
import ComposeButton from "./Components/ComposeButton";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  const { openCompose } = useAppContext();

  return (
    <div className="w-screen h-screen relative">
      {/* <Login/> */}
      <SignUp/>

      {/* Header */}
      {/* <Header /> */}

      {/* Middle Section */}
      {/* <MiddleMain /> */}

      {/* Compose Page Overlay */}
      {/* {openCompose && (
        <div className="fixed bottom-5 right-5 z-50">
          <ComposePage />
        </div>
      )} */}

      {/* Compose Button */}
      {/* <div className="fixed right-5 bottom-5 z-40">
        <ComposeButton />
      </div> */}
    </div>
  );
};

export default App;
