import React, { useState } from "react";
import "./NavElement.css";
const NavElement = ({ children }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
      className={`navElement ${display ? "" : "d-none"}`}
    >
      {children}
    </div>
  );
};

export default NavElement;
