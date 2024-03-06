import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "material-symbols";
import "./index.css";
import { DataProvider } from "../context.jsx";
import { BrowserRouter } from "react-router-dom";

const base = process.env.NODE_ENV === "production" ? "/ai-insighter/" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter basename={base}>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </>
);
