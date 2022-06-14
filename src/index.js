import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// //<React.StrictMode>
// <App />
// </React.StrictMode>
