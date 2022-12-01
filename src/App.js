import './App.css';
import Navbar from'./componentes/Navbar'
import State from'./componentes/State';
function App() {
  return (
    <>
      <Navbar   title = "Aman"  text = "About"/>;
      <div className="container">
      <State heading="Type your comments"/>
      </div>
    </>
  );
}

export default App;
