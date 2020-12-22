import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";
import routers from "../../routes/routes";

const Navigation = () => (
  <header className={style.header}>
    <div className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            exact
            to="/"
            className={style.link}
            activeClassName={style.link_active}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/movies"
            className={style.link}
            activeClassName={style.link_active}
          >
            Tasks
          </NavLink>
        </li>
      </ul>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            to={routers.registerPage}
            className={style.link}
            activeClassName={style.link_active}
          >
            Sign-in
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routers.loginPage}
            className={style.link}
            activeClassName={style.link_active}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Navigation;
