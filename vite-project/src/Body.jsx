import React, { Component, createContext, useContext, useState } from "react";
import WorkerList from "./WorkerList.jsx";
import Displayer from "./Displayer.jsx";
import "./Body.css";


export const activeContext = createContext();

function Body() {
  const [active, setActive] = useState(null);
  return (
    <div className="body-container">
      <activeContext.Provider value={[active, setActive]}>
        <WorkerList></WorkerList>
        <Displayer></Displayer>
      </activeContext.Provider>
    </div>
  );
}



export default Body;
