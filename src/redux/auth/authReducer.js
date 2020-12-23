import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authAction from "./authAction";

const initialUsersState = { name: null, email: null };

const user = createReducer(initialUsersState, {
  [authAction.registerSucces]: (_, { payload }) => payload.user,
  [authAction.loginSucces]: (_, { payload }) => payload.user,
  [authAction.getUserSucces]: (_, { payload }) => payload.user,
  [authAction.logoutSucces]: () => initialUsersState,
});

const token = createReducer(null, {
  [authAction.registerSucces]: (_, { payload }) => payload.token,
  [authAction.loginSucces]: (_, { payload }) => payload.token,
  [authAction.logoutSucces]: () => null,
});

const error = createReducer(null, {
  [authAction.registerErr]: (_, { payload }) => payload.error,
  [authAction.loginErr]: (_, { payload }) => payload.error,
  [authAction.logoutErr]: (_, { payload }) => payload.error,
  [authAction.getUserErr]: (_, { payload }) => payload.error,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default combineReducers({ user, token, error });
