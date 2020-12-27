import React, { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContacrList";
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import taskOperations from "../redux/tasks/taskOperations";
import { connect } from "react-redux";

class ContactPage extends Component {
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

export default connect(null, mapDispatchToProps)(ContactPage);
