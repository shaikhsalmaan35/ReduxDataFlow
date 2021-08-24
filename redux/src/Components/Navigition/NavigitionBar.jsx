import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigition.css";

export const NavigitionBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/home">
            <Navbar.Brand href="/home">Redux</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/Fetching">Fetching</NavLink>
            <NavLink to="/About US">About US</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
