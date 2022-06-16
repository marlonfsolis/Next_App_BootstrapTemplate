export default function SideNavbarMenuItems() {

  return (
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
  )
}