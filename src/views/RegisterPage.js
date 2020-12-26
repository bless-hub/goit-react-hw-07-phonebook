import React, { Component } from "react";
import style from "./RegisterPage.module.css";
import authOperations from "../redux/auth/authOperations";
import { connect } from "react-redux";
// import taskOperations from "../../redux/tasks/taskOperations";

import logo from "./Logo.module.css";
import { CSSTransition } from "react-transition-group";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <CSSTransition
          in={true}
          appear
          timeout={5000}
          unmountOnExit
          classNames={logo}
        >
          <h1>Registration</h1>
        </CSSTransition>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Email
            <input
              className={style.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Password
            <input
              className={style.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.button} type="submit">
            Registration
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
