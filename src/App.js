import React, { Component } from "react";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContacrList";
import ContactForm from "./components/ContactForm/ContactForm";

import Filter from "./components/Filter/Filter";
import taskOperations from "./redux/tasks/taskOperations";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onfetchContacts();
  }
  render() {
    return (
      <>
        <Container title="PhoneBook">
          <ContactForm />
        </Container>
        <Container>
          <Filter />
          <ContactList />
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onfetchContacts: taskOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
