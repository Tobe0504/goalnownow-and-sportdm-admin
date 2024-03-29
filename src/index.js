import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AdContextProvider from "./Context/AdContext";
import AuthContextProvider from "./Context/AuthContext";
import SportDmNewsContextProvider from "./Context/SportDmNewsContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthContextProvider>
      <AdContextProvider>
        <SportDmNewsContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SportDmNewsContextProvider>
      </AdContextProvider>
    </AuthContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
