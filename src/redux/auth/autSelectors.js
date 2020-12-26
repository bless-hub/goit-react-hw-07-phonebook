const isAuthenticated = (state) => state.users.token;
const getCurrentUserName = (state) => state.users.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default { isAuthenticated, getCurrentUserName };
