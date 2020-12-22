import React, { Component } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import taskOperations from "../../redux/tasks/taskOperations";
import logo from "./Logo.module.css";
import { CSSTransition } from "react-transition-group";

class ContactForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { email, value } = e.target;
    this.setState({ [email]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
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
          <h1>PhoneBook</h1>
        </CSSTransition>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Email
            <input
              className={style.input}
              type="text"
              name="name"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Password
            <input
              className={style.input}
              type="text"
              name="number"
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
  addContact: taskOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
