import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/HomePage/Home";
import Dashboard from "./routes/Dashboard/Dashboard";
import About from "./routes/About/About";
import Helpline from "./routes/Helpline/Helpline";
import NavBar from "../src/components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
