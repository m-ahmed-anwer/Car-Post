import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setPasswordError("");
      console.log("Successfully Signed up");
    } else {
      setPasswordError(() => {
        return <small className="text-danger">Password doesn't match</small>;
      });
    }
  }
  return (
    <>
      <div
        style={{
          margin: "5% auto",
          display: "block",
          width: "350px",
        }}
      >
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <h2 className="text-center pb-4">Sign Up</h2>
            <label className="form-label" for="nameText">
              <h6>Name</h6>
            </label>
            <input
              type="text"
              id="nameText"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="emailAdd">
              <h6>Email address</h6>
            </label>
            <input
              type="email"
              id="emailAdd"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="passwordData">
              <h6>Password</h6>
            </label>
            <input
              type="password"
              id="passwordData"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="confirmPass">
              <h6>Confirm Password</h6>
            </label>
            <input
              type="password"
              id="confirmPass"
              name="confirmPassword"
              value={formData.confirm}
              onChange={handleChange}
              className="form-control"
            />
            {passwordError}
          </div>

          <button className="btn btn-primary btn-block mb-4">Sign up</button>

          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
            <p>OR sign up with</p>
            <hr className="mt-2 mx-5" />

            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "35px", padding: "1rem 2rem" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: "35px", padding: "1rem 2rem" }}
            ></FontAwesomeIcon>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signin;
