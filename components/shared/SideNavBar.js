import { useState } from "react"
import styles from "styles/Layout.module.css";

export default function SideNavbar(props) {
  const sideNavbarStatuses = { Close: "Close", Open: "Open", Offcanvas: "Offcanvas" }
  // let sideNavbarStatus = sideNavbarStatuses.Close
  const [sideNavbarStatus, sideNavbarStatusSet] = useState(sideNavbarStatuses.Close)
  const [sideNavbarWidth, sideNavbarWidthSet] = useState("4.5rem");

  function sideNavbarToggleBtn() {
    if (sideNavbarStatus === sideNavbarStatuses.Close) {
      sideNavbarWidthSet("280px");
      setTimeout(() => {
        sideNavbarStatusSet(sideNavbarStatuses.Open)
      }, 100);
    }
    if (sideNavbarStatus === sideNavbarStatuses.Open) {
      sideNavbarWidthSet("4.5rem");
      setTimeout(() => {
        sideNavbarStatusSet(sideNavbarStatuses.Close)
      }, 80);
    }
  }

  const openNavbar = (
    <div className={styles.sideNavbar + " d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"} style={{ width: sideNavbarWidth }}>
      <div className="d-flex flex-row align-items-center">
        <a href="#" className="d-flex flex-fill align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <i className="bi bi-bootstrap me-2" width="40" height="32"></i>
          <span className="fs-4">Sidebar</span>
        </a>
        <a href="#" className="text-white text-decoration-none" onClick={sideNavbarToggleBtn}>
          <i className="bi bi-caret-left"></i>
        </a>
      </div>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <i className="bi bi-house me-2" width="16" height="16">i</i>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2" width="16" height="16"></i>
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
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )

  const closeNavbar = (
    <div className={styles.sideNavbar + " d-flex flex-column flex-shrink-0 bg-dark"} style={{ width: sideNavbarWidth }}>
      <div className="d-flex flex-row align-items-center">
        <a href="#" className="d-block p-3 link-light text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
          <i className="bi bi-bootstrap" width="40" height="32"></i>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <a href="#" className="text-white text-decoration-none" onClick={sideNavbarToggleBtn}>
          <i className="bi bi-caret-right"></i>
        </a>
      </div>

      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#" className="nav-link active py-3 border-bottom text-white" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
            <i className="bi bi-house" width="24" height="24" role="img" aria-label="Home"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom text-white" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <i className="bi bi-speedometer2" width="24" height="24" role="img" aria-label="Dashboard"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom text-white" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
            <i className="bi bi-table" width="24" height="24" role="img" aria-label="Orders"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom text-white" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
            <i className="bi bi-grid" width="24" height="24" role="img" aria-label="Products"></i>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3 border-bottom text-white" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
            <i className="bi bi-person-circle" width="24" height="24" role="img" aria-label="Customers"></i>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )

  return (
    <>
      {sideNavbarStatus === sideNavbarStatuses.Open && openNavbar}
      {sideNavbarStatus === sideNavbarStatuses.Close && closeNavbar}
    </>
  )
}