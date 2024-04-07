
import Navbar from "./Components/Homepage/Navbar.jsx";
import Home from "./Components/Homepage/Home.jsx";
import Signin from "./Components/Auth/Signin";
import Login from "./Components/Auth/Login";
import Report from "./Components/Report/Report";
import Registration from "./Components/Registration/Registration";
import Loginpage from "./Components/Loginpage/Loginpage";
import Prices from "./Components/Prices/Prices"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/prize" element={<Prices />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
