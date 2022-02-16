import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import UXdesign from "./Components/UXdesign";
import Frontend from "./Components/Frontend";
import One from "./UXPages/One";
import Two from "./UXPages/Two";
import Three from "./UXPages/Three";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Main />} />
          <Route path="/design" element={<UXdesign />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/frontend" element={<Frontend />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
