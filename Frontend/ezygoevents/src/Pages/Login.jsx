import React, { useState } from "react";
import "../styles/login.css";
import loginimg from "../Componants/Assets/login.png";
import { FaArrowLeft } from "react-icons/fa6";
import AuthService from "../Services/AuthService";
import { redirect, useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();


  const [formdetails, setformdetails] = useState({
    email: "",
    password: "",
  });

  const authenticateUser = (event) => {
    event.preventDefault();
    if (
      formdetails.email === "" ||
      formdetails.password === "" 
    ) {
      alert("Enter valid details");
      return;
    }
    AuthService.signIn(formdetails)
      .then((result) => {
        if(result.data === null){
          alert("User not found")
       }

       if(result.data.role === "ADMIN"){
         navigate("/admin/dashboard")
         alert("login successful")
       }else{
        navigate("/")
        alert("login successful")
       }
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
                    name="email"
                  className="login-from form-control ml-4"
                  id="mail"
                  placeholder="eg. johndoe@gmail.com"
                  value={formdetails.email}
                  onChange={handlechange}
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
                  type="password"
                  name="password"
                  className="login-from form-control ml-4"
                  id="Name"
                  placeholder="password"
                  value={formdetails.password}
                  onChange={handlechange}
                ></input>
              </div>
              <button type="submit" class="login-btn ml-4 w-100 p-2 text-lg" onClick={authenticateUser}>
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
