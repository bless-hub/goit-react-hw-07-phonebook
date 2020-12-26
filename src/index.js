import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";

import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
