import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import UXdesign from "./Components/UXdesign";
import Frontend from "./Components/Frontend";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Main />} />
          <Route path="design" element={<UXdesign />} />
          <Route path="frontend" element={<Frontend />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
