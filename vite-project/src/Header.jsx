import React, { Component, useContext, useState } from "react";
import Account from "./Account.jsx";
import "./Header.css";
import { inputContext, sortContext } from "./App.jsx";


function Header() {

  const [search, setSearch] = useContext(inputContext);
  const [sort, setSort] = useContext(sortContext)

  const changeInput = e => {
    setSearch(e.target.value);
  }

  const sortA = () => {
    setSort("sortA")
  }

  const sortB = () => {
    setSort("sortB")
  }

  return (
    <div className="header">
      <a href="https://www.disway.com/" target="_blank"><img className="logo" src="../data_gen/images/logo2.png" /></a>
      <div className="bar">
        <input className="search-bar" type="text" placeholder="search..." value={search} onChange={changeInput}/>
        <button className="btn-bar" onClick={sortA}>A</button>
        <button className="btn-bar" onClick={sortB}>B</button>
      </div>
      <Account register={false}></Account>
    </div>
  );
}




export default Header;
