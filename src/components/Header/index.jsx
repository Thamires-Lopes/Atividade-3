import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyHeader = ({ title, routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">{title}</Navbar.Brand>
    <Nav className="mr-auto">
      {routes.map((route) => (
        <Link className="nav-link" to={route.path}>{route.name}</Link>
      ))}
    </Nav>
  </Navbar>
);

export default MyHeader;
