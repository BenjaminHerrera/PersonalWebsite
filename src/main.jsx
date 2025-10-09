import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./app.jsx";
import "@fontsource/inter/900.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark-dimmed.css"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
