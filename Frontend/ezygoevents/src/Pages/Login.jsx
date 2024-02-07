import React from "react";
import "../styles/login.css";
import loginimg from "../Componants/Assets/login.png";
import { FaArrowLeft } from "react-icons/fa6";
const Login = () => {
  const component = (
    <>
      <a href="/">
        <div className="pt-3 pl-4">
          <FaArrowLeft></FaArrowLeft>
          <span className="ml-2">Back to Homepage</span>
        </div>
      </a>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="heading">
              <h2>Login</h2>
            </div>
            <form action="">
              <div className="form-group">
                <label htmlFor="Name" className="text-muted ml-4">
                  Email
                  <span style={{ color: "red" }}>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  className="login-from form-control ml-4"
                  id="Name"
                  placeholder="eg. johndoe@gmail.com"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="Name" className="text-muted ml-4">
                  Password
                  <span style={{ color: "red" }}>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  className="login-from form-control ml-4"
                  id="Name"
                  placeholder="password"
                ></input>
              </div>
              <button type="submit" class="login-btn ml-4 w-100 p-2 text-lg">
                Login
              </button>
              <div className="ml-4 mt-2">
                <p>
                  New user? Create an Account{" "}
                  <span style={{ color: "blue" }}>
                    <a href="/signup">Sign up</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={loginimg} className="img-signin img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  );
  return component;
};

export default Login;
