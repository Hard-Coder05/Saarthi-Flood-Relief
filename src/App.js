import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/routes/HomePage/Home";
import NavBar from "../src/components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
