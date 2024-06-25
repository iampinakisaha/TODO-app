import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

// Ensure this matches the element ID in your HTML file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
