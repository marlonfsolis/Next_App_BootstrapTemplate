import { useRouter } from 'next/router'
import React from 'react'

const ActiveLink = (props) => {
  const router = useRouter();
  const { asPath } = useRouter();

  // Props
  let classes = props.className || "";
  const children = props.children;
  const isExact = props.exact || false;
  const href = props.href || "";
  const activeClassName = props.activeClassName || "active";
  const role = props.role || null;
  const onItemClick = props.onItemClick || function (params) { };

  const addActiveClass = () => { classes = classes.concat(" ", activeClassName) };

  if ((isExact && (href === asPath || href + "#" === asPath))
    || (!isExact && asPath.startsWith(href))
  ) {
    addActiveClass();
  }

  const handleClick = (e) => {
    e.preventDefault();
    onItemClick(e);
    router.push(href);

    // console.log(e);
  };

  const elemProps = {
    role: role
  };

  return (
    <a href={href} onClick={handleClick} className={classes} {...elemProps}>
      {children}
    </a>
  )
}

export default ActiveLink;