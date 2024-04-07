import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div id="button provider2">
      <div id="btn content2">
        {/* Wrap the button content with the Link component */}
        <Link to="/login">
          <button>
            Communities
          </button>
        </Link>
        <Link to="/login">
          <button>
            Users
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Loginpage
