
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import About from "./screens/About/About.jsx";
import Layout from "./components/Layout/Layout.jsx";

import './App.css';

function App() {
  return (
    <div className="container-App">
      <Layout >
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
