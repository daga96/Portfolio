import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import UXdesign from "./Components/UXdesign";
import Frontend from "./Components/Frontend";
import One from "./UXPages/One";
import Two from "./UXPages/Two";
import Three from "./UXPages/Three";
import Four from "./UXPages/Four";
import Five from "./UXPages/Five";
import Six from "./UXPages/Six";
import Seven from "./UXPages/Seven";
import Eight from "./UXPages/Eight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Main />} />
          <Route path="Portfolio/design" element={<UXdesign />} />
          <Route path="Portfolio/one" element={<One />} />
          <Route path="Portfolio/two" element={<Two />} />
          <Route path="Portfolio/three" element={<Three />} />
          <Route path="Portfolio/four" element={<Four />} />
          <Route path="Portfolio/five" element={<Five />} />
          <Route path="Portfolio/six" element={<Six />} />
          <Route path="Portfolio/seven" element={<Seven />} />
          <Route path="Portfolio/eight" element={<Eight />} />
          <Route path="Portfolio/frontend" element={<Frontend />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
