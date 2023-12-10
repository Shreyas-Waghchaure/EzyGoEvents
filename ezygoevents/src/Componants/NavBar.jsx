import React from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";

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
    <Navbar className="navbar">
   
        <Navbar.Brand href="#home" className="brand ml-4">EzyGoEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           {
            menuItems.map(item => (
                <NavLink to={item.path} key={item.name}>
                    <div className="list_item m-3">{item.name}</div>
                </NavLink>
            ))
           }        
          <button type="button" class="btn btn-dark p-2 m-3">Host an Event</button>
          <button type="button" class="btn btn-outline-dark p-2 m-3">Sign in</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
