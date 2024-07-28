import { createContext, useState } from "react";

export const PageBuilderContext = createContext();

export const PageBuilderProvider = ({ children }) => {
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [zoomLevel, setZoomLevel] = useState("100%");
  const [elements, setElements] = useState([]);

  const addElementToCanvas = (type) => {
    setElements((prevElements) => [
      ...prevElements,
      {
        id: prevElements.length,
        type,
        content: type === "text" ? "Edit me" : "",
      },
    ]);
  };

  const updateElementContent = (id, content) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, content } : el))
    );
  };

  return (
    <PageBuilderContext.Provider
      value={{
        activeDevice,
        setActiveDevice,
        zoomLevel,
        setZoomLevel,
        elements,
        addElementToCanvas,
        updateElementContent,
      }}
    >
      {children}
    </PageBuilderContext.Provider>
  );
};
