import React, { Component } from "react";
import Container from "./components/Container/Container";
// import ContactList from "./components/ContactList/ContacrList";
// import ContactForm from "./components/ContactForm/ContactForm";
import { Switch, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import ContactPage from "./views/ContactPage";

// import Filter from "./components/Filter/Filter";
// import taskOperations from "./redux/tasks/taskOperations";
// import { connect } from "react-redux";
import AppBar from "./components/AppBar/AppBar";
// import Navigation from "./components/Navigation/Navigation";
import authOperations from "./redux/auth/authOperations";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container title="PhoneBook">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/registration" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/contacts" component={ContactPage} />
          </Switch>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
