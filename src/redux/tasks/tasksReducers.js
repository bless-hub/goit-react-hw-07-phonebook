import { combineReducers } from "redux";
import taskActions from "./taskActions";
import { createReducer } from "@reduxjs/toolkit";
import notification from "../../components/Notification/Notification";
// import tasksTypes from "./tasksTypes";

const addContactAction = (state, action) => {
  const newContact = action.payload;
  const notificationName = state.find(
    (contact) => contact.name === newContact.name
  );
  if (notificationName) {
    notification();
  } else {
    return [...state, action.payload];
  }
};

const removeContactAction = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [taskActions.fetchContactSucces]: (state, action) => action.payload,
  [taskActions.addContactSucces]: addContactAction,
  [taskActions.removeContactSucces]: removeContactAction,
});

const filter = createReducer("", {
  [taskActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
