import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import { Hello } from "./Header";
// It would be also fine one line `import Header, { Hello } from "./Header"`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Hello />
  </React.StrictMode>
);
