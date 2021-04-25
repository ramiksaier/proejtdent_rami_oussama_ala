import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Ap from "./Ap";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./REduxJS/store/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Ap />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
