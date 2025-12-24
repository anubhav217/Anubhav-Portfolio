import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";             // ✅ correct path
import "./utils/scroll-offset";   // keeps offset synced
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
