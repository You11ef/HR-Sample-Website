import React, { useState, useContext } from 'react'
import "./Displayer.css";
import { modifyContext } from './App';

function Button(props) {
  const mode = props.mode;
  const [modifier, setModifier] = useContext(modifyContext)

  const changeMode = () => {
    setModifier(mode)
  }

  return (
    <button className={`btn ${mode}`}><img className="icon" src={`../data_gen/images/${mode}.png`} onClick={changeMode}/></button>
  )
}

export default Button