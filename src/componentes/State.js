import React, { useState } from 'react'


export default function State(props) {
  const handleup = () => {
    let newstate = state.toUpperCase();
    setState(newstate);
    props.showalert("Converted to Upper Case ", "success")
  }
  const handlelo = () => {
    let newstate = state.toLowerCase();
    setState(newstate);
    props.showalert("Converted to Lover Case ", "success")
  }
  const handleclear = () => {
    let newstate = '';
    setState(newstate);
    props.showalert("Text clear", "success")
  }
  const handlecopy = () => {
    var text = document.getElementById('block');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text copy", "success")
  }
  const handleExtraSpaces = () => {
    let newText = state.split(/[ ]+/);
    setState(newText.join(" "))
    props.showalert(" Remove Extra Spaces", "success")
  }
  const handleonchanged = (event) => {
    setState(event.target.value);
  }
  const [state, setState] = useState('');
  //state = 'new text' this is wrong way
  //setState("who is Aman"); this is write way
  return (
    <>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="text">
          <textarea className="area" id="block" value={state} onChange={handleonchanged} cols="150" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button disabled={state.length === 0} className=" my-2 btn btn-primary mx-2" onClick={handleup}>Convert TO Upper case</button>
        <button disabled={state.length === 0} className=" my-2 btn btn-primary mx-2" onClick={handlelo}>Convert TO lower case</button>
        <button disabled={state.length === 0} className=" my-2 btn btn-primary mx-2" onClick={handleclear}>Clear</button>
        <button disabled={state.length === 0} className=" my-2 btn btn-primary mx-2" onClick={handlecopy}>Copy</button>
        <button disabled={state.length === 0} className=" my-2 btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Accurate Words and charachter</h2>
        <p>{state.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {state.length} Charchter</p>
        <p> {0.008 * state.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{state.length > 0 ? state : "Nothing to Preview"}</p>
      </div>

    </>
  )
}
