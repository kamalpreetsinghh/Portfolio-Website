import React from "react";
import { images } from "../../constants";

const NavLogo = () => {
  return (
    <div className="app__navbar-logo">
      <img src={images.logo_light} alt="website-logo" />
    </div>
  );
};

export default NavLogo;
