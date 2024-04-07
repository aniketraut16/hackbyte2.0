
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <div id="div1">
        Green Click
      </div>



      <div id="div2">
      <Link to="/">Home</Link>
      
      <Link to="/dashboard">Rewards</Link>
      <Link to="/report">Report</Link>
      </div>
    </div>
  );
}

export default Navbar;
