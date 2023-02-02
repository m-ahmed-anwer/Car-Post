import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <>
      <div
        style={{
          margin: "8% auto",
          display: "block",
          width: "350px",
        }}
      >
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <h2 className="text-center pb-4">Log In</h2>
            <label className="form-label" for="form2Example1">
              <h6>E-mail address</h6>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter E-mail"
              onChange={handleChange}
              value={data.email}
              name="email"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              <h6>Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange}
              value={data.password}
              name="password"
            />
          </div>

          <button className="btn btn-primary btn-block mb-4">Log in</button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
