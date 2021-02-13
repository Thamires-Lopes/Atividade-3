import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyHeader = ({ title, routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Nav className="mr-auto">
      { routes.map((route) => <Nav.Link href="#">{route}</Nav.Link>)}
    </Nav>
  </Navbar>
);

export default MyHeader;
