import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleNavToggle = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light m-auto">
        <a className="navbar-brand ml-5" href="/">
          EzyGoEvents
        </a>
        <div className= {isMobile?"collapse navbar-collapse" : "nav-link-mobile"} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink as={Link} className="nav-link" to="/explore">
                Explore
              </NavLink>
              </li>
              <li className="nav-item active">
              <NavLink as={Link} className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>
            <Link to={"/"}>
            <button type="button" className="host-btn ml-2 p-2">Host an Event</button>
            </Link>
            <Link to={"/login"}>
            <button type="button" className="btn signin-btn ml-4 p-2">Sign In</button>
            </Link>
          </ul>
        </div>
        <div className="mobile-nav-icon"onClick={handleNavToggle}>
            {isMobile? <FaTimes/>:<FaBars/>}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
