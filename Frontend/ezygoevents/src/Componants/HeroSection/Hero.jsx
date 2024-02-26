import React from "react";


import homepage from "../Assets/Homepage.jpg";
import "../HeroSection/Hero.css"
import { Link } from "react-router-dom";
const Hero = () => {
  let componant = (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="pt-5  mt-5 ml-3 t-3" style={{ color: "black" }}>
            Discover Exciting Events
            <br /> Near You Today!
          </h1>
          <p className="pt-2  m-3 t-3" style={{ color: "black" }}>
            Find and book tickets for concerts, festivals, and more with ease.
          </p>
          <div className="btn-wrapper d-flex pt-2  t-3">
            <button
              type="button"
              class="btn m-3"
              style={{
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "0",
                color: "white",
                width: "140px",
              }}
            >
              Explore
            </button>
            <Link to={"/signup"}>
            <button
              type="button"
              class="btn m-3"
              style={{
                borderRadius: "0",
                border: "2px solid black",
                color: "black",
                width: "120px",
              }}
            >
              Sign up
            </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 " style={{"backgroundColor":"white"}}>
          <img src={homepage} className="img-hero"></img>
        </div>
      </div>
    </div>
    </>
  );
  return componant;
};

export default Hero;
