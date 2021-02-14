import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ title, routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{title}</Navbar.Brand>
    <Nav>
      { routes.map((route) => <Link className="nav-link" to={route.path}>{route.name}</Link>)}
    </Nav>
  </Navbar>
);

export default Header;
