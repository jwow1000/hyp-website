import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
