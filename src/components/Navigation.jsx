import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>        
        <Nav className="me-auto">
          <ul className="menu-navegador">
            <li><Link to="/">Demo</Link></li>
            <li><Link to="/grilla">Grilla</Link></li>          
          </ul>          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
