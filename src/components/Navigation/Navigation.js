import React from "react";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import style from "./navigation.module.css";
import { connect } from "react-redux";

const Navigation = ({ isAutorization }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink
          exact
          to="/"
          className={style.link}
          activeClassName={style.link_active}
        >
          Home
        </NavLink>
      </li>
      {isAutorization && (
        <li>
          <NavLink
            to="/contacts"
            className={style.link}
            activeClassName={style.link_active}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isAutorization: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
