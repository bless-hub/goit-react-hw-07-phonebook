import Axios from "axios";
import authAction from "./authAction";
import axios from "axios";

Axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {};

const signInUser = (info) => (dispatch) => {
  dispatch(authAction.registerSucces());
  axios
    .post("users/signup", info)
    .then((res) => {
      console.log(res);
      //   token.set(res.data.token);
      //   dispatch(authAction.registerSucces);
    })
    .catch((error) => dispatch(authAction.registerErr(error)));
};

const loginUser = (info) => (dispatch) => {
  dispatch(authAction.loginRequest());
  axios
    .post("users/login", info)
    .then((res) => {
      console.log(res);
      //   token.set(res.data.token);
      //   dispatch(authAction.loginSucces);
    })
    .catch((error) => dispatch(authAction.loginErr(error)));
};

const logoutUser = (info) => (dispatch) => {
  dispatch(authAction.logoutRequest());
};

const getUsersContact = (info) => (dispatch) => {
  dispatch(authAction.getUserRequest());
  axios
    .get("users/current", info)
    .then((res) => {
      dispatch(authAction.getUserSucces(res.data));
    })
    .catch((error) => authAction.getUserErr(error));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { signInUser, loginUser, logoutUser, getUsersContact };
