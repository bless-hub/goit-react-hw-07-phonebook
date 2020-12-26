import axios from "axios";
import authActions from "./authAcrions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest(credentials));

  axios
    .post("/users/signup", credentials)
    .then((res) => {
      console.log(res);
      dispatch(authActions.registerSucces(res.data));
      token.set(res.data.token);
    })
    .catch((error) => dispatch(authActions.registerUserErr(error.message)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((res) => {
      dispatch(authActions.loginSucces(res.data));
      console.log(res.data);
      console.log(res.data.name);
      token.set(res.data.token);
    })

    .catch((error) => dispatch(authActions.loginErr(error.message)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    axios.post("/users/logout");
    token.unset();
    dispatch(authActions.logoutSucces());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    users: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getUserRequest());
  axios
    .get("/users/current")
    .then((res) => {
      console.log(res.data);
      dispatch(authActions.getUserSucces(res.data));
    })
    .catch((error) => dispatch(authActions.getUserErr(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, logIn, logOut, getCurrentUser };
