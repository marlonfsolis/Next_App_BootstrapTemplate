import React from "react";
import { useRouter } from "next/router";

import ActiveLink from "./ActiveLink";
import SideNavbarMenuItems from "./SideNavbarMenuItems";


export default function TopNavbar() {
  const router = useRouter();

  const title = "Next-Bootstrap App";

  function onItemClickHandler(e) {
    var offcanvasElem = document.getElementById("sideNavbarOffcanvas");
    var offcanvasInst = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElem);
    offcanvasInst.hide();
    console.log("Item clicked!");
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNavbarOffcanvas" aria-controls="sideNavbarOffcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ActiveLink href="/home" exact={true} className="navbar-brand" >{title}</ActiveLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbarContent" aria-controls="topNavbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ActiveLink href="/home" exact={true} className="nav-link">Home</ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink href="/home/about" className="nav-link">About</ActiveLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="offcanvas offcanvas-start text-white bg-dark" tabIndex="-1" id="sideNavbarOffcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">{title}</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <SideNavbarMenuItems onItemClick={onItemClickHandler} />
        </div>
      </div>

    </>
  )
}
