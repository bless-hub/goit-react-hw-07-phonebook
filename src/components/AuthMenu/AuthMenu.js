import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";

const AuthMenu = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink
          exact
          to="/registration"
          className={style.link}
          activeClassName={style.link_active}
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={style.link}
          activeClassName={style.link_active}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthMenu;
