import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
