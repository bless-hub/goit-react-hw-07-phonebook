import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { connect } from "react-redux";

const PublicRoute = ({
  component: Component,
  isLogin,
  restricted,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isLogin: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
