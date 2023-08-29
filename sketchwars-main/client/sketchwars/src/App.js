import Fabric from "./components/Fabric";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tablet from "./components/Tablet";
import Tv from "./components/Tv";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/tablet" element={<Tablet/>} />
          <Route path="/tv" element={<Tv/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
