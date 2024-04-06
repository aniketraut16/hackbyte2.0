import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signin() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userphno, setuserphno] = useState("");
  const [userage, setuserage] = useState("");
  const [usergender, setusergender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [, setError] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/backend/user/createuser",
        {
          username,
          useremail,
          userpassword,
          userphno,
          userage,
          usergender,
          city,
          state,
        }
      );

      // Assuming the response structure is { message, token }
      alert(response.data.message); // You can also use a toast library or a modal
      navigate("/redirect-path"); // Redirect upon successful submission
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError("Internal server error");
      alert("Error creating user. Please try again."); // Show an alert for error
    }
  };

  return (
    <div id="SignIn" className="secondoption">
      <form>
        <h1>Login Form</h1>

        <label htmlFor="user-name">Name</label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          required
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />

        <label htmlFor="user-email">Email</label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          required
          value={useremail}
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        />

        <label htmlFor="user-password">Password</label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          required
          value={userpassword}
          onChange={(e) => {
            setuserpassword(e.target.value);
          }}
        />

        <label htmlFor="user-phno">Phone Number</label>
        <input
          type="number"
          name="user-phno"
          id="user-phno"
          required
          value={userphno}
          onChange={(e) => {
            setuserphno(e.target.value);
          }}
        />

        <label htmlFor="user-age">Age</label>
        <input
          type="number"
          name="user-age"
          id="user-age"
          required
          value={userage}
          onChange={(e) => {
            setuserage(e.target.value);
          }}
        />

        <label htmlFor="user-gender">Gender</label>
        <select
          name="user-gender"
          id="usergender"
          value={usergender}
          onChange={(e) => {
            setusergender(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          required
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          required
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <p className="already-have">
          Already have an account? <Link to="/login">Click here</Link> to login.
        </p>
        <button onClick={handleFormSubmit}>SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
