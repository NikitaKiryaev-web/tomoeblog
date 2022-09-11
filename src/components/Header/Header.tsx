import React, { FC } from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header: FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <Nav />
    </header>
  );
};

export default Header;
