import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
} from "react-router-dom";
import CustomerRoutes from "./Router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerRoutes />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
