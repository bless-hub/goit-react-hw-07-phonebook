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

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest(credentials));

  await axios
    .post("/users/signup", credentials)
    .then((res) => {
      console.log(res);
      token.set(res.data.token);
      dispatch(authActions.registerSucces(res.data));
    })
    .catch((error) => dispatch(authActions.registerUserErr(error.message)));
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  await axios
    .post("/users/login", credentials)
    .then((res) => {
      token.set(res.data.token);

      dispatch(authActions.loginSucces(res.data));
      console.log(res.data);
    })

    .catch((error) => dispatch(authActions.loginErr(error.message)));
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    console.log(token);
    dispatch(authActions.logoutSucces());
  } catch (error) {
    dispatch(authActions.logoutErr(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    users: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getUserRequest());
  await axios
    .get("/users/current")
    .then((res) => {
      console.log(res.data);
      dispatch(authActions.getUserSucces(res.data));
    })
    .catch((error) => dispatch(authActions.getUserErr(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, logIn, logOut, getCurrentUser };
