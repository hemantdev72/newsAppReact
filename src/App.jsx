import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar category="general" />} />
          <Route path="/science" element={<Navbar category="science" />} />
          <Route
            path="/entertainment"
            element={<Navbar category="entertainment" />}
          />
          <Route path="/general" element={<Navbar category="general" />} />
          <Route path="/health" element={<Navbar category="health" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
