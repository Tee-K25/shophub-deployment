import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({
  isSignedIn,
  changeIssigned,
  isLoggedIn,
  changeIslogged,
  changeName,
  name,
}) {
  const [formData, setFormData] = useState({
    username: "",

    password: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://ecommerce.muersolutions.com/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        changeIssigned(true);
        changeIslogged(true);
        changeName(formData.username);
        navigate("/");
      });
  }
  return (
    <div>
      <div>
        <h2>Log In</h2>
      </div>{" "}
      <div className="sform">
        <form onSubmit={handleSubmit}>
          <h4>Log In here</h4>
          <label>User Name</label> <br />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <label>Password</label> <br />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
