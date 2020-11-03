import React, { Component } from "react";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContacrList";
import ContactForm from "./components/ContactForm/ContactForm";
import { connect } from "react-redux";
import Filter from "./components/Filter/Filter";
import taskOperation from "./redux/tasks/taskOperations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
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
  onFetchContacts: taskOperation.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
