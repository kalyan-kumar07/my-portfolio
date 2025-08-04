import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css';
import ScrollToTop from "./ScrollToTop";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ScrollToTop />  {/* after every path name changes in url it scrolls page to top */}
      <Navbar collapseOnSelect expanded={expanded} expand="md" variant="dark" sticky="top" className="shadow-sm" style={{ background: "linear-gradient(135deg, #080b0cff, #0b1214ff, #11191dff)" }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold text-info">
            <i className="bi bi-code-slash me-2"></i>Kalyan Kumar Alajangi
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} className={`hamburger-icon ${expanded ? "expanded" : ""}`} />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/education" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Education
              </Nav.Link>
              <Nav.Link as={NavLink} to="/experience" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Experience
              </Nav.Link>
              <Nav.Link as={NavLink} to="/skills" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Skills
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link-custom" onClick={() => {
                if (expanded) setExpanded(false);
              }}>
                Contact Me
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
