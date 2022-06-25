import { useRouter } from 'next/router'
import React from 'react'

const ActiveLink = (props) => {
  const router = useRouter();
  const { asPath } = useRouter();

  // Props
  const children = props.children;
  const exact = props.exact;
  const type = props.type;
  const href = props.href;
  const className = props.className;
  const activeClassName = props.activeClassName || "active";
  const onItemClick = props.onItemClick || function (params) { };


  let childClassName = "nav-link";
  const isExact = exact || false;
  let role = "button";

  if (type !== "navLink" && type !== "dropdownItem") {
    type = "navLink";
  }

  if (type === "dropdownItem") {
    childClassName = "dropdown-item";
    role = "";
  }

  let classes = childClassName;

  if (isExact) {
    if (href === asPath || href + "#" === asPath) {
      classes = `${childClassName} ${activeClassName}`.trim();
    }
  } else if (asPath.startsWith(href)) {
    classes = `${childClassName} ${activeClassName}`.trim();
  }

  const handleClick = (e) => {
    e.preventDefault();
    onItemClick(e);
    router.push(href);

    // console.log(e);
  };

  return (
    <a role={role} href={href} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}

export default ActiveLink;