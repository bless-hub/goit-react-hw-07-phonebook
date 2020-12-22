import React, { Component } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import logo from "./Logo.module.css";
import { CSSTransition } from "react-transition-group";
import authOperation from "../../redux/auth/authOperation";

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.reset();
  };

  reset = () => {
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
          <h1>PhoneBook</h1>
        </CSSTransition>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="text"
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
            Registered
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperation.signInUser,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
