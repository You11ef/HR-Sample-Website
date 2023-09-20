import React, { Component, useContext } from "react";
import "./Worker.css";
import { activeContext } from "./Body";
import { useDrag } from "react-dnd";
import { cardContext, modifyContext } from "./App";


export function Worker(props) {
  let worker = props.val;
  const [active, setActive] = useContext(activeContext);
  const [modifier, setModifier] = useContext(modifyContext);
  const [showcard, setShowCard] = useContext(cardContext)
  const [{isDragging}, drag] = useDrag(() => ({
    type: "div",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const handleCard = () => {
    if (modifier === "null") {
      document.querySelector(".display").scrollTop = 0;
      console.log(document.querySelector(".display").scrollTop)
      if (!active || worker.id !== active.id ) {
        setActive(worker)
        setShowCard("none")
      } else {
        setShowCard(worker)
      }
    } else {
      
    }
  }

  let classname = "worker-chart" + (props.displayed ? " displayed" : "") + (props.main ?  " main" : "") + (isDragging ? " dragged" : "");

    return (
      <div className={classname} onClick={handleCard} ref={drag}>
        <div className="img-container">
          <img className="img" src={`../data_gen${worker.image}`} />
        </div>
        <div className="details">
          <div className="name"><p>name</p> : {worker.name}</div>
          {!props.displayed && <div className="mail"><p>mail</p> : {worker.mail}</div>}
          <div className="number"><p>num</p> : {worker.number}</div>
        </div>
      </div>
    );
} 


export default Worker;
