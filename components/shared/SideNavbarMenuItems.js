import Link from "next/link"
import Nav from "react-bootstrap/Nav"

import ActiveLink from "./ActiveLink"

export default function SideNavbarMenuItems() {

  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column mb-auto">
      <ActiveLink href="/home" type="navLink" exact={true}><i className="bi bi-house me-2" width="16" height="16"></i>Home</ActiveLink>
      <ActiveLink href="/home/about" type="navLink"><i className="bi bi-info-square me-2" width="16" height="16"></i> About</ActiveLink>
      <ActiveLink href="#/orders" type="navLink"><i className="bi bi-table me-2" width="16" height="16"></i> Orders</ActiveLink>
      <ActiveLink href="#/products" type="navLink"><i className="bi bi-grid me-2" width="16" height="16"></i> Products</ActiveLink>
      <ActiveLink href="#/customers" type="navLink" disabled><i className="bi bi-person-circle me-2" width="16" height="16"></i> Customers</ActiveLink>
    </Nav>
  )
}