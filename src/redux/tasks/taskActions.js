import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSucces = createAction("contact/addSucces");
const addContactError = createAction("contact/addErr");

const fetchContactRequest = createAction("contact/fetchRequest");
const fetchContactSucces = createAction("contact/fetchSucces");
const fetchContactError = createAction("contact/fetchErr");

const removeContactRequest = createAction("contact/addRequest");
const removeContactSucces = createAction("contact/addSucces");
const removeContactError = createAction("contact/addErr");

const removeContact = createAction("contact/remove");

const changeFilter = createAction("contact/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContactRequest,
  addContactSucces,
  addContactError,
  removeContactError,
  removeContactRequest,
  removeContactSucces,
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
  removeContact,
  changeFilter,
};
