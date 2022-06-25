import Link from "next/link"
import Nav from "react-bootstrap/Nav"

import ActiveLink from "./ActiveLink"

export default function SideNavbarMenuItems(props) {

  const onItemClick = props.onItemClick || function (params) { };

  function onItemClickHandler(e) {
    onItemClick(e);
  }

  return (
    // <Nav variant="pills" defaultActiveKey="/home" className="flex-column mb-auto">
    //   <ActiveLink href="/home" type="navLink" exact={true} onItemClick={onItemClickHandler}><i className="bi bi-house me-2" width="16" height="16"></i>Home</ActiveLink>
    //   <ActiveLink href="/home/about" type="navLink" onItemClick={onItemClickHandler}><i className="bi bi-info-square me-2" width="16" height="16"></i> About</ActiveLink>
    //   <ActiveLink href="#/orders" type="navLink" onItemClick={onItemClickHandler}><i className="bi bi-table me-2" width="16" height="16"></i> Orders</ActiveLink>
    //   <ActiveLink href="#/products" type="navLink" onItemClick={onItemClickHandler}><i className="bi bi-grid me-2" width="16" height="16"></i> Products</ActiveLink>
    //   <ActiveLink href="#/customers" type="navLink" disabled><i className="bi bi-person-circle me-2" width="16" height="16"></i> Customers</ActiveLink>
    // </Nav>



    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <ActiveLink href="/home" type="navLink" exact={true} className="" onItemClick={onItemClickHandler}>
          <i className="bi bi-house me-2" width="16" height="16"></i>
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/home/about" type="navLink" onItemClick={onItemClickHandler}>
          <i className="bi bi-info-square me-2" width="16" height="16"></i>
          About
        </ActiveLink>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-info-square me-2" width="16" height="16"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-table me-2" width="16" height="16"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-grid me-2" width="16" height="16"></i>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <i className="bi bi-person-circle me-2" width="16" height="16"></i>
          Customers
        </a>
      </li>
    </ul>

  )
}