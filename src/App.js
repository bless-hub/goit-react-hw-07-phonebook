import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import route from "./routes/routes";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
// import ContactList from "./components/ContactList/ContacrList";
import LoginPage from "./components/views/loginPage";
// import ContactForm from "./components/ContactForm/ContactForm";
// import MainPage from "./components/MainPage/mainPage";

// import Filter from "./components/Filter/Filter";
// import taskOperations from "./redux/tasks/taskOperations";
import { connect } from "react-redux";
import HomePage from "./components/views/homePage";
import registerPage from "./components/views/registerPage";
import authOperation from "./redux/auth/authOperation";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <>
        <Navigation />
        <Container title="PhoneBook">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path={route.registerPage} component={registerPage} />
            <Route path={route.loginPage} component={LoginPage} />
          </Switch>
        </Container>

        {/* <MainPage></MainPage>
        <Container title="PhoneBook">
          <ContactForm />
        </Container>
        <Container>
          <Filter />
          <ContactList />
        </Container> */}
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperation.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
