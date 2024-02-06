import React from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";
import "../styles/Navbar.css"
const NavBar = () => {
    const menuItems = [
        {
            path:"/upcoming",
            name:"Upcoming Events"
        },
        {
            path:"/featured",
            name:"Featured Events" 
        },
        {
            path:"/categories",
            name:"Categories" 
        },
    ]
  return (
    <div>
    <Navbar className="navbar" sticky="top">
        <Navbar.Brand href="#home" className="brand ml-4 navbar-brand">EzyGoEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           {
            menuItems.map(item => (
                <NavLink to={item.path} key={item.name}>
                    <div className="list_item m-2 menu-itemslink"></div>
                </NavLink>
            ))
           }        
          <button type="button" class="btn p-2 m-2 host-event-btn">Host an Event</button>
          <button type="button" class="btn p-2 m-2 signin-btn">Sign in</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
