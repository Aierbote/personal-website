import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import Header from "./Header";
import { Hello } from "./Header";
// It would be also fine one line `import Header, { Hello } from "./Header"`

import Layout from "./Layout/Layout";

import Example from "./Example/Example.jsx"
import ToDoList from "./ToDoList/ToDoList.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Header />
    <App />
    <Hello /> */}

    {/* exercize just from basic html tags to components */}
    {/* <Layout /> */}

    {/* Example of Child-to-Parent */}
    {/* <Example /> */}
    {/* ToDoList exercize */}
    <ToDoList />
  </React.StrictMode>
);
