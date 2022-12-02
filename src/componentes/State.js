import React, { useState } from 'react'


export default function State(props) {
  const handleup = () => {
    let newstate = state.toUpperCase();
    setState(newstate);
  }
  const handlelo = () => {
    let newstate = state.toLowerCase();
    setState(newstate);
  }
  const handleclear = () => {
    let newstate = '';
    setState(newstate);
  }
  const handlecopy = () =>{
    var text = document.getElementById('block');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newText = state.split(/[ ]+/);
    setState(newText.join(" "))
  }
  const handleonchanged = (event) => {
    setState(event.target.value);
  }
  const [state, setState] = useState('');
  //state = 'new text' this is wrong way
  //setState("who is Aman"); this is write way
  return (
    <>
      <div className='container my-3'>
        <h2>{props.heading}</h2>
        <div className="text">
          <textarea className="area" id="block" value={state} onChange={handleonchanged} cols="150" rows="8"></textarea>
        </div>
        <button className=" my-2 btn btn-primary mx-2" onClick={handleup}>Convert TO Upper case</button>
        <button className=" my-2 btn btn-primary mx-2" onClick={handlelo}>Convert TO lower case</button>
        <button className=" my-2 btn btn-primary mx-2" onClick={handleclear}>Clear</button>
        <button className=" my-2 btn btn-primary mx-2" onClick={handlecopy}>Copy</button>
        <button className=" my-2 btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container">
        <h2>Your Accurate Words and charachter</h2>
        <p>{state.split(" ").length} Words and {state.length} Charchter</p>
        <p> {0.008 * state.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{state}</p>
      </div>

    </>
  )
}
