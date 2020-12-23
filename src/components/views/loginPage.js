import React, { Component } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
// import taskOperations from "../../redux/tasks/taskOperations";
import authOperation from "../../redux/auth/authOperation";
import logo from "./Logo.module.css";
import { CSSTransition } from "react-transition-group";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <CSSTransition
          in={true}
          appear
          timeout={5000}
          unmountOnExit
          classNames={logo}
        >
          <h1>Login</h1>
        </CSSTransition>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Email
            <input
              className={style.input}
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Password
            <input
              className={style.input}
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.button} type="submit">
            Login
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperation.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
