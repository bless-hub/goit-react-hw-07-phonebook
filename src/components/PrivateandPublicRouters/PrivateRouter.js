import React from "react";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/autSelectors";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isLogin: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
