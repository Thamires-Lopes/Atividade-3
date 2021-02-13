import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyHeader = ({ title, routes }) => {
  const [first, second, third] = routes;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="#first">{first}</Nav.Link>
        <Nav.Link href="#second">{second}</Nav.Link>
        <Nav.Link href="#third">{third}</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyHeader;
