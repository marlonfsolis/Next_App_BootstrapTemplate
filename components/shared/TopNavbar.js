import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas"
import SideNavbarMenuItems from "./SideNavbarMenuItems";

export default function TopNavbar() {
  const router = useRouter()

  const title = "Content Manager"
  const [offcanvasShow, setOffcanvasShow] = useState(false)


  function offcanvasHandleOpen(event) {
    event.preventDefault()
    event.stopPropagation()
    setOffcanvasShow(true)
  }
  // const offcanvasHandleOpen = (event) => { event.preventDefault(); setOffcanvasShow(true); }
  const offcanvasHandleClose = () => setOffcanvasShow(false)


  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <span className="d-inline d-sm-none">
            <button type="button" className="navbar-toggler collapsed" onClick={offcanvasHandleOpen}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </span>
          <Navbar.Brand><Link href="/">{title}</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <ActiveLink href="/home" type="navLink" exact={true}>Home</ActiveLink>
              <ActiveLink href="/home/about" type="navLink">About</ActiveLink>
              <NavDropdown title="Resources" id="resources-nav-dropdown">
                <ActiveLink href="/resources/add" type="dropdownItem">Add</ActiveLink>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={offcanvasShow} onHide={offcanvasHandleClose} className="text-white bg-dark" id="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href="#" className="d-flex flex-fill align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <i className="bi bi-bootstrap me-2" width="40" height="32"></i>
              <span className="fs-4">{title}</span>
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideNavbarMenuItems />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
