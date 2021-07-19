import './App.css';
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";

function App() {
  return (
    <div className="app">
      <Navbar>
        <NavItem icon="😻"/>
        <NavItem icon="😻"/>
        <NavItem icon="😻"/>
      </Navbar>
    </div>
  );
}

export default App;
