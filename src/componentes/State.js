import React, { useState } from 'react'


export default function State(props) {
  const handle = () =>{
    // console.log("buttuan was clicked:" + state);
    let newstate = state.toUpperCase();
    setState(newstate);
  }
  const handleonchanged = (event)=>{
    // console.log("on changed");
    setState(event.target.value);
  }
  const [state, setState] = useState('Type here');
  //state = 'new text' this is wrong way
  //setState("who is Aman"); this is write way
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="text">
          <textarea className="area" id="block" value={state} onChange={handleonchanged} cols="100" rows="8"></textarea>
        </div>
        <button className=" my-2 btn btn-primary" onClick={handle}>Convert TO Uppercase</button>
      </div>
    </>
  )
}
