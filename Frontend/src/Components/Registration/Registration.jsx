
import { Link } from "react-router-dom";
import "./Registration.css"
function Registration() {
  return (
    <div id="button provider">
      <div id="btn content">
        {/* Wrap the button content with the Link component */}
        <Link to="/signin">
          <button>
            Communities
          </button>
        </Link>
        <Link to="/signin">
          <button>
            Users
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Registration;
