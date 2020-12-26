import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import style from "./appbar.module.css";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const AppBar = ({ isAutorization }) => (
  <header className={style.header}>
    <Navigation />
    {isAutorization ? <UserMenu /> : <AuthMenu />}
  </header>
);

const mapStateToProps = (state) => ({
  isAutorization: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
