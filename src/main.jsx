import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PageBuilderProvider from "./context/PageBuilderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageBuilderProvider>
      <App />
    </PageBuilderProvider>
  </React.StrictMode>
);
