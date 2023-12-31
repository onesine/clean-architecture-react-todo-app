import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { TASKS } from "./constants";

const tasks = localStorage.getItem("tasks");
if (!tasks) localStorage.setItem("tasks", JSON.stringify(TASKS));

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
