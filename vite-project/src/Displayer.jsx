import React, { Component, useContext, useEffect } from "react";
import "./Displayer.css";
import { activeContext } from "./Body";
import Stage from "./Stage";
import DataSample from "../src/assets/DataSample.json";
import Button from "./Button"
import Card from "./Card";
import { cardContext } from "./App";


function Displayer() {

  const [active, setActive] = useContext(activeContext);
  let displayer;

  const [showCard, setShowCard] = useContext(cardContext);

  useEffect(() => {
    if (showCard !== "none") {
      document.querySelector(".display-card").classList.remove("closed")
      document.querySelector(".display-card").classList.add("opened")
      document.querySelector(".display").classList.remove("state-closed")
      document.querySelector(".display").classList.add("state-opened")
    } else {
      if (document.querySelector(".opened")) {
      document.querySelector(".display-card").classList.remove("opened")
      document.querySelector(".display-card").classList.add("closed")
      document.querySelector(".display").classList.remove("state-opened")
      document.querySelector(".display").classList.add("state-closed")
      }
    }
  })

  const buttons = <div className="buttons">
                <Button mode="add"></Button>
                <Button mode="del"></Button>
                <Button mode="null"></Button>
              </div>;


  if (active) {
    const maxnumber = 3;
    if (active.list !== "") {
      let [lvl0, lvl1] = active.list.split("/")
      let subworkers = lvl1.split(",").map(i => DataSample[i])
      let numberOfStage = subworkers.length / maxnumber;
      let final = [];
      for (let i = 0; i< subworkers.length; i++) {
        if (!(i%maxnumber)) {
          final.push([DataSample[Number(subworkers[i].id)]])
        } else {
          final[final.length-1].push(DataSample[Number(subworkers[i].id)])
        }
      }
      displayer = <><div className="display max state-closed">
        {buttons}
        <Stage val={[DataSample[Number(lvl0)]]} main={true}></Stage>
        <img className="top" src="../data_gen/images/top.png" />
        <Stage val={[active]} main={true}></Stage>
        <img className="mid" src="../data_gen/images/mid.png" />
        {final.map((workers, i) => <Stage val={workers} key={i}></Stage>)}
      </div>
      <div className="display-card closed"><Card></Card></div>
      </>;
    } else {
      displayer = <div className="display max state-closed">
        <Stage val={[active]}></Stage>
      </div>
    }
  } else {
    displayer = <div className="display max state-closed">
      {buttons}
    </div>
  }

  return displayer;
}



export default Displayer;
