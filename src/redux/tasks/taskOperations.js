import taskActions from "./taskActions";
import axios from "axios";
// import { createReducer } from "@reduxjs/toolkit";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(taskActions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((res) => dispatch(taskActions.addContactSucces(res.data)))
    .catch((err) => dispatch(taskActions.addContactError(err)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(taskActions.fetchContactRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then((res) => dispatch(taskActions.fetchContactSucces(res.data)))
    .catch((err) => dispatch(taskActions.fetchContactError(err)));
};

const removeContacts = (id) => (dispatch) => {
  dispatch(taskActions.removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(taskActions.removeContactSucces(id)))
    .catch((err) => dispatch(taskActions.removeContactError(err)));
};

// const loading = createReducer(false, {
//   [taskActions.addContactRequest]: () => true,
//   [taskActions.addContactSucces]: () => false,
//   [taskActions.addContactError]: () => false,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContact,
  fetchContacts,
  removeContacts,
};
