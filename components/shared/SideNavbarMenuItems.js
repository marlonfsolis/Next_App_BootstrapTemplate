
import ActiveLink from "./ActiveLink"

export default function SideNavbarMenuItems(props) {

  const onItemClick = props.onItemClick || function (params) { };

  function onItemClickHandler(e) {
    onItemClick(e);
  }

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <ActiveLink href="/home" exact={true} className="nav-link text-white" onItemClick={onItemClickHandler}>
          <i className="bi bi-house me-2" width="16" height="16"></i>
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/home/about" className="nav-link text-white" onItemClick={onItemClickHandler}>
          <i className="bi bi-info-square me-2" width="16" height="16"></i>
          About
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
          <i className="bi bi-table me-2" width="16" height="16"></i>
          Orders
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
          <i className="bi bi-grid me-2" width="16" height="16"></i>
          Products
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
          <i className="bi bi-person-circle me-2" width="16" height="16"></i>
          Customers
        </ActiveLink>
      </li>
    </ul>

  )
}