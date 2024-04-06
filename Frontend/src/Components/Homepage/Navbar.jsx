
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      
      <Link to="/">Home</Link>
      <Link to="/event">Event</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/report">Report</Link>
    </div>
  );
}

export default Navbar;
