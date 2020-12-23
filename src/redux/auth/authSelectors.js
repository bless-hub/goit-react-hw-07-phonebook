const getIsAuthenticated = (state) => {
  console.log(Boolean(state.auth.user));
  return Boolean(state.auth.user);
};

const getUsername = (state) => {
  console.log(state.auth.user.name);
  return state.auth.user.name;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUsername,
};
