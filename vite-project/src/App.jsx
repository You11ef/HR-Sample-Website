import React, {useState, useContext, createContext, useEffect, useCallback} from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import "./App.css";
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"

export const inputContext = createContext();
export const modifyContext = createContext();
export const sortContext = createContext();
export const cardContext = createContext();

function App() {

  const [search, setSearch] = useState("");
  const [modifier, setModifier] = useState("null");
  const [sort, setSort] = useState("unsorted");
  const [showCard, setShowCard] = useState("none");


  const closePanel = (event) => {
    if (event.key === "Escape") {
      setShowCard("none")
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closePanel);
    return () => {
      document.removeEventListener("keydown", closePanel);
    }
  })

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <cardContext.Provider value={[showCard, setShowCard]}>
          <sortContext.Provider value={[sort, setSort]}>
            <modifyContext.Provider value={[modifier, setModifier]}>
              <inputContext.Provider value={[search, setSearch]}>
                <Header></Header>
                <Body></Body>
              </inputContext.Provider>
            </modifyContext.Provider>
          </sortContext.Provider>
        </cardContext.Provider>
      </div>
    </DndProvider>
  );
}

export default App;
