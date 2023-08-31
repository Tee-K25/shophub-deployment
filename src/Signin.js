import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signIn.css";

function Signin({
  isSignedIn,
  changeIssigned,
  isLoggedIn,
  changeIslogged,
  changeName,
  name,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    fetch("http://ecommerce.muersolutions.com/api/v1/user/signup", {
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
        changeName(formData.firstName);
        navigate("/");
      });
  }

  return (
    <div className="page" >
      <div>
        <h2>Sign In</h2>
      </div>
      <div className="sform" >
        
        <form onSubmit={handleSubmit}>
            <h4>Sign In here</h4>
          <label>First Name</label> <br />
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <label>Last Name</label> <br />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <label>Email</label> <br />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
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
          <button type="submit">SignIn</button>
        </form>
      </div>
    </div>
  );
}
export default Signin;
