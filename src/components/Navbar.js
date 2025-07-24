import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css';

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="shadow-sm" style={{background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)"}}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-info">
          <i className="bi bi-code-slash me-2"></i>Kalyan kumar Alajangi
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              About
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/education" className="nav-link-custom">
              Education
            </Nav.Link>
            <Nav.Link as={NavLink} to="/experience" className="nav-link-custom">
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              Contact Me
            </Nav.Link>

            {/* <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Another Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something">Something Else</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/projects">Settings</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/">Profile</NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
