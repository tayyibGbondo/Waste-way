//React-routerDom
import { Route, Routes } from "react-router-dom";

//components
import About from "./Pages/About";
import Navbar from "../src/components/navigation/Navbar";
import Landing from "./Pages/Landing";
import Products from "./Pages/products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
