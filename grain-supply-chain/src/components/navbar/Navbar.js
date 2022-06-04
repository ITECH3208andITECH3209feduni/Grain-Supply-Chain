import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { GiWheat } from "react-icons/gi";
import { MdOutlineStore, MdImportExport, MdOutlineContacts } from "react-icons/md";
import './NavbarStyle.css';

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [pathChanged, updatePathChanged] = useState(false);

  function onClicked(state) {
    updateExpanded(state)
    updatePathChanged(!pathChanged)
  }

  function scrollHandler() {
    if (window.scrollY >= 20) { updateNavbar(true); } else { updateNavbar(false); }
  }

  window.addEventListener("scroll", scrollHandler);

  function onLoginBtnClicked(loginModalState, state) {
    props.onLoginModalStateChanged(loginModalState)
    onClicked(state)
  }

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={(navColour || window.location.pathname !== "/") ? "sticky" : "navbar"} >
      <Container>
        <Navbar.Brand href="/" className="d-flex"><strong className="navbar-brand"> GSC</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded"); }}>
          <span></span> <span></span> <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => onClicked(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/farm" onClick={() => onClicked(false)}>
                <GiWheat style={{ marginBottom: "2px" }} /> Farm
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/storage" onClick={() => onClicked(false)}>
                <MdOutlineStore style={{ marginBottom: "2px" }} /> Storage
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/transport" onClick={() => onClicked(false)}>
                <BsTruck style={{ marginBottom: "2px" }} /> Transport
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/export" onClick={() => onClicked(false)}>
                <MdImportExport style={{ marginBottom: "2px" }} /> Export
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact-us" onClick={() => onClicked(false)}>
                <MdOutlineContacts style={{ marginBottom: "2px" }} /> Contact us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="#" onClick={() => onLoginBtnClicked(true, false)}>
                <MdOutlineContacts style={{ marginBottom: "2px" }} /> Generate Report
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;