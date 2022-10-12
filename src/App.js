import React, { useEffect } from "react";
import ButtonBar from "./components/ButtonBar";

import "./App.css";

const App = () => {
  return (
    <div className="h-screen w-full flex justify-between items-center align-super bg-main-dark-bg flex-col">
      <ButtonBar className="w-full" />
    </div>
  );
};

export default App;
