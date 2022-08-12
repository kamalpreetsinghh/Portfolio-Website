import React from "react";
import "./Header.scss";
import HeaderImage from "../../components/header/HeaderImage";
import HeaderInfo from "../../components/header/HeaderInfo";

const Header = () => (
  <section id="home" className="app__header app__section">
    <div className="app__header-div">
      <HeaderInfo />
      <HeaderImage />
      <div className="app__header-empty"></div>
    </div>
  </section>
);

export default Header;
