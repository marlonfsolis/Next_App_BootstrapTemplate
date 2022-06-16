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

export default function TopNavbar() {
  const router = useRouter()
  const [offcanvasShow, setOffcanvasShow] = useState(false)

  const offcanvasHandleOpen = () => setOffcanvasShow(true)
  const offcanvasHandleClose = () => setOffcanvasShow(false)


  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <span className="d-inline d-sm-none">
            <Navbar.Toggle onClick={offcanvasHandleOpen} />
          </span>
          <Navbar.Brand><Link href="/">Content Manager</Link></Navbar.Brand>
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

      <Offcanvas show={offcanvasShow} onHide={offcanvasHandleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
