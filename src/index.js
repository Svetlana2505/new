import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Global } from "./utils/Style";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
  // </React.StrictMode>
);
