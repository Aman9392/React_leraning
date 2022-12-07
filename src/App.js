import './App.css'
import About from './componentes/About';
import Navbar from './componentes/Navbar';
import State from './componentes/State';
import React, { useState } from 'react';
import Alert from './componentes/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // check dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodycolor = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggle = (cls) => {
    removeBodycolor();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been Enabled :", "Success");
      document.title = 'Text converter/Dark/Mode';

      // setInterval(() => {
      //   document.title = 'Text converter is Great';
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' Install Text converter Now';
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been Enabled :", "Success");
      document.title = 'Text converter/Light/Mode';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Aman" text="About" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<State showalert={showalert} heading="Type your comments" mode={mode} />}>
          </Route>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
