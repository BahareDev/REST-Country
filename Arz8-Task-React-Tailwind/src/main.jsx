import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// API
// https://restcountries.com/v3.1/all

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
