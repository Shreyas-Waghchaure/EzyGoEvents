import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('hosts'); // Initial active item

  const handleSelect = (key) => {
    setActiveItem(key);
    navigate(`/admin/dashboard/${key}`); // Programmatically navigate on click
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavItem>
            <NavLink
            as={Link}
              active={activeItem === 'hosts'}
             to="/admin/dashboard/hosts"
            >
              Hosts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              active={activeItem === 'events'}
              to="/admin/dashboard/events"
            >
              Events
            </NavLink>
          </NavItem>
          {/* Add more NavItems for other features as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;