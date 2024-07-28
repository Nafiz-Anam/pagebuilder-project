import React, { createContext, useState } from "react";

export const PageBuilderContext = createContext();

const PageBuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [zoomLevel, setZoomLevel] = useState("100%");
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [selectedElement, setSelectedElement] = useState(null);
  const [rightSidebarView, setRightSidebarView] = useState("layers");
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);

  const addElementToCanvas = (type) => {
    const defaultStyle = {
      width: "100%",
      height: "auto",
      backgroundColor: "#ffffff",
      margin: "0",
      padding: "0",
    };

    const newElement = {
      id: elements.length,
      type,
      content: type === "text" ? "Edit me" : "",
      style: defaultStyle,
    };

    setElements((prevElements) => [...prevElements, newElement]);
    setSelectedElement(newElement);
    setRightSidebarView("settings");
    setActiveSidebarItem(null); // Deactivate the sidebar item
  };

  const updateElementContent = (id, content) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, content } : el))
    );
  };

  const updateElementStyle = (id, newStyle) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, style: { ...el.style, ...newStyle } } : el
      )
    );
  };

  const addElementToContainer = (containerId, type) => {
    setElements((prevElements) =>
      prevElements.map((el) => {
        if (el.id === containerId) {
          return {
            ...el,
            children: [
              ...(el.children || []),
              { id: `${containerId}-${Date.now()}`, type },
            ],
          };
        }
        return el;
      })
    );
  };

  return (
    <PageBuilderContext.Provider
      value={{
        elements,
        zoomLevel,
        activeDevice,
        setZoomLevel,
        setActiveDevice,
        addElementToCanvas,
        updateElementContent,
        updateElementStyle,
        addElementToContainer,
        selectedElement,
        setSelectedElement,
        rightSidebarView,
        setRightSidebarView,
        activeSidebarItem,
        setActiveSidebarItem,
      }}
    >
      {children}
    </PageBuilderContext.Provider>
  );
};

export default PageBuilderProvider;
