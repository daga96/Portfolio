import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import UXdesign from "./Components/UXdesign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="design" element={<UXdesign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
