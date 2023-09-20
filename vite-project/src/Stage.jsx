import React from 'react'
import Worker from './Worker'
import "./Stage.css"

function Stage(props) {
  let workerslist = props.val;
  let main = props.main;
  let stage;
  if (main) {
    stage = <Worker val={workerslist[0]} displayed={true} main={true}></Worker>
  } else {
    stage = <div className='stage'>
    {workerslist.map((x,i) => <Worker val={x} displayed={true} key={i}></Worker>)}
  </div> 
  }
  return stage
}

export default Stage