import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Global styles

import AuthProvider from "./AuthProvider.jsx";

// 1. Find the actual DOM node in index.html
const rootElement = document.getElementById("root");

// 2. Mount React into that node
createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
            <App />
    </AuthProvider>
  </StrictMode>,
);
