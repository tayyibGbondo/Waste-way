//React-routerDom
import { Route, Routes } from "react-router-dom";

//components
import About from "./Pages/About";
import Navbar from "../src/components/navigation/Navbar";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
