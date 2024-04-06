import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userphno, setuserphno] = useState("");
  const [userage, setuserage] = useState("");
  const [usergender, setusergender] = useState("");
  const [userexperience, setuserexperience] = useState("");
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
          userexperience,
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

        <label htmlFor="user-experience">Experience</label>
        <select
          name="user-experience"
          id="userexperience"
          value={userexperience}
          onChange={(e) => {
            setuserexperience(e.target.value);
          }}
        >
          <option value="" disabled selected>
            What you have done so far?
          </option>
          <option value="Newbie">Newbie</option>
          <option value="Participated in school drives">
            Participated in school drives
          </option>
          <option value="Participated in college environmental drive">
            Participated in college environmental drive
          </option>
          <option value="Member of any environmental community">
            Member of any environmental community
          </option>
          <option value="Lead of any environmental community">
            Lead of any environmental community
          </option>
        </select>
        <p className="already-have">
          Already have a account , <Link to="/login">Click here</Link> To login
        </p>
        <button onClick={handleFormSubmit}>SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
