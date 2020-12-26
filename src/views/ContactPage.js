import React, { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContacrList";
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import taskOperations from "../redux/tasks/taskOperations";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/autSelectors";

class ContactPage extends Component {
  componentDidMount() {
    if (!this.props.isAutorization) {
      this.props.history.replace("/login");
      return;
    }
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
const mapStateToProps = (state) => ({
  isAutorization: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onfetchContacts: taskOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
