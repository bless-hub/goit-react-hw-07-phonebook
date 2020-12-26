import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authAcrions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSucces]: (_, { payload }) => payload.user,
  [authActions.loginSucces]: (_, { payload }) => payload.user,
  [authActions.getUserSucces]: (_, { payload }) => payload,
  [authActions.logoutSucces]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSucces]: (_, { payload }) => payload.token,
  [authActions.loginSucces]: (_, { payload }) => payload.token,
  [authActions.logoutSucces]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerUserErr]: setError,
  [authActions.loginUserErr]: setError,
  [authActions.loginUserErr]: setError,
  [authActions.getUserErr]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
