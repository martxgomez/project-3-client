import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import { UserProviderWrapper } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <UserProviderWrapper>
        <App />
      </UserProviderWrapper>
    </Router>
  </StrictMode>
);
