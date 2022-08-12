import React from "react";
import NavLinks from "./NavLinks";
import Switch from "react-switch";
import { FaMoon } from "react-icons/fa";
import "./NavBar.scss";

const NavBar = ({ isDarkMode, onThemeChange }) => (
  <nav className="app__navbar">
    {/* <NavLogo /> */}
    <NavLinks />
    <div className="app__theme">
      <Switch
        onChange={onThemeChange}
        checked={isDarkMode}
        onColor="#86d3ff"
        uncheckedIcon={false}
        checkedIcon={false}
        handleDiameter={22}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        height={15}
        width={35}
      />
      <FaMoon />
    </div>
  </nav>
);

export default NavBar;
