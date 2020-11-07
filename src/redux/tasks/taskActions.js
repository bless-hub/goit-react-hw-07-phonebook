import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("contact/addRequest");
const addContactsSucces = createAction("contact/addSucces");
const addContactsErr = createAction("contact/addErr");

const fetchContactsRequest = createAction("contact/fetchRequest");
const fetchContactsSucces = createAction("contact/fetchSucces");
const fetchContactsErr = createAction("contact/fetchErr");

const removeContactRequest = createAction("contact/removeRequest");
const removeContactSucces = createAction("contact/removeSucces");
const removeContactErr = createAction("contact/removeErr");

const changeFilter = createAction("contact/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  changeFilter,
  addContactsRequest,
  addContactsSucces,
  addContactsErr,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsErr,
  removeContactRequest,
  removeContactSucces,
  removeContactErr,
};
