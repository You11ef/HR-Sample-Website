import React, { Component, useContext } from "react";
import "./WorkerList.css";
import DataSample from "../src/assets/DataSample.json";
import Worker from "./Worker.jsx";
import { inputContext, sortContext } from "./App";


function WorkerList() {

  const [input, setInput] = useContext(inputContext);
  const [sort, setSort] = useContext(sortContext)
  const dataFromSearch = DataSample.filter(val => val.name.includes(input) || val.number.includes(input) || val.mail.includes(input))

  if (sort === "sortA") {
    dataFromSearch.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  } else if (sort === "sortB") {
    dataFromSearch.sort(function (a, b) {
      if (a.name < b.name) {
        return 1
      }
      if (a.name > b.name) {
        return -1
      }
      return 0
    })
  }

  return (
    <div className="list">
      {dataFromSearch.map((x, i) => (
        <Worker val={x} key={i} displayed={false}></Worker>
      ))}
    </div>
  );
}



export default WorkerList;
