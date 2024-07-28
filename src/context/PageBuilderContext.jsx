import { createContext, useState } from "react";

export const PageBuilderContext = createContext();

const PageBuilderProvider = ({ children }) => {
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [zoomLevel, setZoomLevel] = useState("100%");

  return (
    <PageBuilderContext.Provider
      value={{ activeDevice, setActiveDevice, zoomLevel, setZoomLevel }}
    >
      {children}
    </PageBuilderContext.Provider>
  );
};

export default PageBuilderProvider;
