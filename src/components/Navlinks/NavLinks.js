import React from "react";
import { NavLink } from "react-router-dom";
import NavElement from "../Navlink/NavElement";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import "./NavLinks.css";
import { useSelector } from "react-redux";
import Lightbtn from "../LightBtn/LightBtn";

function NavLinks() {
  const lightValue = useSelector((state) => state.light);

  return (
    <>
      <Lightbtn />
      <ul className="navLinks">
        <li>
          <NavLink className={!lightValue ? "day" : "night"} to="/">
            <NavElement>
              <span>BOSH SAHIFA</span>
              <div className="icon-link">
                <FaHome />
              </div>
            </NavElement>
          </NavLink>
        </li>
        <li>
          <NavLink className={!lightValue ? "day" : "night"} to="/about">
            <NavElement>
              <span>O'ZIM HAQIMDA</span>
              <div className="icon-link">
                <FaUserAlt />
              </div>
            </NavElement>
          </NavLink>
        </li>
        <li>
          <NavLink className={!lightValue ? "day" : "night"} to="/portfolio">
            <NavElement>
              <span>PORTFOLIO</span>
              <div className="icon-link">
                <FaBriefcase />
              </div>
            </NavElement>
          </NavLink>
        </li>
        <li>
          <NavLink className={!lightValue ? "day" : "night"} to="/contact">
            <NavElement>
              <span>BOG'LANISH</span>
              <div className="icon-link">
                <FaEnvelopeOpen />
              </div>
            </NavElement>
          </NavLink>
        </li>
      </ul>{" "}
    </>
  );
}

export default NavLinks;
