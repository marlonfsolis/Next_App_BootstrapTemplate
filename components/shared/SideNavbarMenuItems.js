import Link from "next/link"
import Nav from "react-bootstrap/Nav"

import ActiveLink from "./ActiveLink"

export default function SideNavbarMenuItems() {

  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column mb-auto">
      <ActiveLink href="/home" type="navLink" exact={true}><i className="bi bi-house me-2" width="16" height="16"></i>Home</ActiveLink>
      <ActiveLink href="/home/about" type="navLink" exact={true}><i className="bi bi-info-square me-2" width="16" height="16"></i> About</ActiveLink>
      <Nav.Link eventKey="link-2"><i className="bi bi-table me-2" width="16" height="16"></i> Orders</Nav.Link>
      <Nav.Link eventKey="link-3"><i className="bi bi-grid me-2" width="16" height="16"></i> Products</Nav.Link>
      <Nav.Link eventKey="link-4" disabled><i className="bi bi-person-circle me-2" width="16" height="16"></i> Customers</Nav.Link>
    </Nav>
  )
}