import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";             // ✅ correct path
import "./utils/scroll-offset";   // keeps offset synced

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
