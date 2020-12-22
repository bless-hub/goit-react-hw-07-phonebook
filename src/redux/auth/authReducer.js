import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import authAction from "./authAction";

const userState = { name: null, password: null };

const user = createReducer(userState, {
  [authAction.registerSucces]: (_, { payload }) => payload.user,
  [authAction.loginSucces]: (_, { payload }) => payload.user,
  [authAction.logoutSucces]: () => userState,
  [authAction.getUserSucces]: (_, { payload }) => payload.user,
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
