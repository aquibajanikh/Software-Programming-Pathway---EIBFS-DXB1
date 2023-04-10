import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/Counter";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AllUsers from "./components/AllUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <Counter />
    <hr /> */}
    {/* <Login />
    <hr />
    <UserProfile /> */}
    <AllUsers />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
