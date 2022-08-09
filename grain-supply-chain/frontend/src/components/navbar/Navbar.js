import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { GiWheat } from "react-icons/gi";
import { MdOutlineStore, MdImportExport,MdPowerSettingsNew, MdOutlineContacts,MdAssignmentInd } from "react-icons/md";
import './NavbarStyle.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [pathChanged, updatePathChanged] = useState(false);

  const getUserInfo = () => {
    const userInfo = sessionStorage.getItem("userInfo");
    if(userInfo) {
        return JSON.parse(userInfo)
    }
    return false;
}

  const signOut = () => {
    sessionStorage.removeItem("userInfo");
    window.location.href = '/';
  }

  function onClicked(state) {
    updateExpanded(state)
    updatePathChanged(!pathChanged)
  }

  function scrollHandler() {
    if (window.scrollY >= 20) { updateNavbar(true); } else { updateNavbar(false); }
  }

  window.addEventListener("scroll", scrollHandler);

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
            
            {//Houyuan
              (getUserInfo() && getUserInfo().nickname)?
              <Nav.Item className="user_z">
                <Nav.Link as={Link} to="/" onClick={() => onClicked(false)}>
                  <MdAssignmentInd style={{ marginBottom: "2px" }} /> { getUserInfo().nickname }
                </Nav.Link>
                <div className="userPanel">
                  <div style={{ padding: "25px" }}>
                  <p>
                    <MdAssignmentInd style={{ marginBottom: "2px" }} /> Nickname：{ getUserInfo().nickname }
                  </p>
                  <p>
                    <MdAssignmentInd style={{ marginBottom: "2px" }} /> Account：{ getUserInfo().username }
                    </p>
                    <p onClick={signOut} className="logOut">
                      <MdPowerSettingsNew style={{ marginBottom: "2px" }}/>
                      Sign Out</p>
                  </div>
                </div>
              </Nav.Item>
              : <Nav.Item>
                <Nav.Link as={Link} to="/login" onClick={() => onClicked(false)}>
                  <MdAssignmentInd style={{ marginBottom: "2px" }} /> LOG/REG
                </Nav.Link>
              </Nav.Item>//Houyuan
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;