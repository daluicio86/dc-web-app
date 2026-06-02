import React from "react";

export default function ButtonLink({ href, children, variant = "primary", icon: Icon, ...props }) {
  return (
    <a className={`button ${variant}`} href={href} {...props}>
      {Icon ? <Icon size={18} strokeWidth={2.4} aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
