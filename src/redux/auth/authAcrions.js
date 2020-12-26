import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSucces = createAction("auth/registerSucces");
const registerErr = createAction("auth/registerErr");

const loginRequest = createAction("auth/loginRequest");
const loginSucces = createAction("auth/loginSucces");
const loginErr = createAction("auth/loginErr");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSucces = createAction("auth/logoutSucces");
const logoutErr = createAction("auth/logoutErr");

const getUserRequest = createAction("auth/getUserRequest");
const getUserSucces = createAction("auth/getUserSucces");
const getUserErr = createAction("auth/getUserErr");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerRequest,
  registerSucces,
  registerErr,
  loginRequest,
  loginSucces,
  loginErr,
  logoutRequest,
  logoutSucces,
  logoutErr,
  getUserRequest,
  getUserSucces,
  getUserErr,
};
