import './App.css';
// import About from './componentes/About';
import Navbar from'./componentes/Navbar'
import State from'./componentes/State';
function App() {
  return (
    <>
      <Navbar   title = "Aman"  text = "About"/>;
      <div className="container">
      <State heading="Type your comments"/>
      </div>
      {/* <About/> */}

    </>
  );
}

export default App;
