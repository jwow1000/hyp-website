
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import About from "./screens/About/About.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Resources from "./screens/Resources/Resources.jsx";
import Research from "./screens/Research/Research.jsx";
import Care from "./screens/Care/Care.jsx";
import Giving from "./screens/Giving/Giving.jsx";

import './App.css';

function App() {
  return (
    <div className="container-App">
      <Layout >
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/resources" element={ <Resources /> }/>
          <Route path="/research" element={ <Research /> }/>
          <Route path="/care" element={ <Care /> }/>
          <Route path="/giving" element={ <Giving /> }/>


        </Routes>
      </Layout>
    </div>
  );
}

export default App;
