import Signin from "./Components/Auth/Signin";
import Login from "./Components/Auth/Login"
import Home from "./Components/Homepage/Home.jsx";
import Navbar from "./Components/Homepage/Navbar.jsx";
import Report from "./Components/Report/Report.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more Route components as needed */}
          <Route path="/signin" element={<Signin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/report" element={<Report/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
