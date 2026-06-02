import React from "react";

export default function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="DoctorCell inicio">
      {/*<span className="brand-mark">D+</span>
      <span>
        <strong>DoctorCell</strong>
        <small>Expertos en tecnología</small>
      </span>*/}
      <img src="./logo.png" alt="DoctorCell logo" className="brand-logo"  height="50"  width="200"/>
    </a>
  );
}
