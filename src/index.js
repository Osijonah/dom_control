import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
