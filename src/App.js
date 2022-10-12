import React from "react";
import ButtonBar from "./components/ButtonBar";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="h-screen w-full flex justify-between items-center align-super bg-main-dark-bg flex-col">
      <Navbar />
      <ButtonBar className="w-full" />
    </div>
  );
};

export default App;
