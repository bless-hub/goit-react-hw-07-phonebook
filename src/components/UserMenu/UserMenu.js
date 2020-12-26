import React from "react";
import style from "./usermenu.module.css";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
// import authSelectors from "../../redux/auth/autSelectors";
// import authOperations from "../../redux/auth/authOperations";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div>
      <ul className={style.list}>
        <li className={style.link}>Welcome {name}</li>
        <li type="button" className={style.link}>
          Logout
        </li>
        <button type="button" onClick={onLogout}></button>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getCurrentUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
