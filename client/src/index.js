import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css"; // Your global styles

// Render the React application into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
