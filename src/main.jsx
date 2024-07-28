import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PageBuilderProvider from "./context/PageBuilderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageBuilderProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </PageBuilderProvider>
  </React.StrictMode>
);
