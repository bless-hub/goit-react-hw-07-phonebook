import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/MainPage")),
    restricted: false,
    private: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterPage")),
    restricted: true,
    private: false,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LoginPage")),
    restricted: true,
    private: false,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/ContactPage")),
    restricted: false,
    private: true,
  },
];
