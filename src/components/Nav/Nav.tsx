import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { RootPaths } from "../../routes";
import "./Nav.scss";

const Nav: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink className="nav__list-link" to={RootPaths.BLOG}>
            БЛОГ
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink className="nav__list-link" to={RootPaths.ABOUT}>
            О НАС
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink className="nav__list-link" to={RootPaths.LOGIN}>
            ВОЙТИ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
