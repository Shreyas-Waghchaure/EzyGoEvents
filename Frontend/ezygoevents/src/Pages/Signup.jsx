import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import loginimg from "../Componants/Assets/login.png";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AuthService from "../Services/AuthService";
const Signup = () => {
  const [formdetails, setformdetails] = useState({
    id: "",
    name: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const addUser = (event) => {
    event.preventDefault();
    if (
      formdetails.name === "" ||
      formdetails.email === "" ||
      formdetails.mobileNo === "" ||
      formdetails.password === "" ||
      formdetails.confirmPassword === ""
    ) {
      alert("Enter valid details");
      return;
    }
    AuthService.signUp(formdetails)
      .then(() => {
        alert("SignUp successful");
      })
      .catch(() => {
        alert("uh oh! something went wrong");
      });
  };

  const handlechange = (event) => {
    let { name, value } = event.target;
    setformdetails({ ...formdetails, [name]: value });
  };
  const component = (
    <>
      <NavLink to={"/"}>
        <div className="pt-3 pl-4">
          <FaArrowLeft></FaArrowLeft>
          <span className="ml-2">Back to Homepage</span>
        </div>
      </NavLink>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="heading">
              <h2>Create an account</h2>
            </div>
            <form action="">
              <div className="form-group">
                <label htmlFor="Name" className="text-muted ml-4">
                  Name
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="signup-from form-control ml-4"
                  id="Name"
                  placeholder="eg. John Doe"
                  defaultValue={formdetails.name}
                  onChange={handlechange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-muted ml-4">
                  Email
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="signup-from form-control ml-4"
                  id="email"
                  placeholder="eg. johndoe@gmail.com"
                  defaultValue={formdetails.email}
                  onChange={handlechange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="mobileno" className="text-muted ml-4">
                  Mobile No
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="text"
                  name="mobileNo"
                  className="signup-from form-control ml-4"
                  id="mobileno"
                  placeholder="eg.1234567890"
                  defaultValue={formdetails.mobileNo}
                  onChange={handlechange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-muted ml-4">
                  Password
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="signup-from form-control ml-4"
                  id="password"
                  placeholder="password"
                  defaultValue={formdetails.password}
                  onChange={handlechange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="cPassword" className="text-muted ml-4">
                  Confirm password
                  <span style={{ color: "red" }}>
                    <sup> *</sup>
                  </span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="signup-from form-control ml-4"
                  id="cPassword"
                  placeholder="confirm password"
                  defaultValue={formdetails.confirmPassword}
                  onChange={handlechange}
                ></input>
              </div>
              <button
                type="submit"
                class="signup-btn ml-4 w-100 p-2"
                onClick={addUser}
              >
                Sign Up
              </button>
              <div className="ml-4 mt-2">
                <p>
                  Already have an account?{" "}
                  <span style={{ color: "blue" }}>
                    <a href="/login">login</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={loginimg} className="img-signup"></img>
          </div>
        </div>
      </div>
    </>
  );
  return component;
};

export default Signup;
