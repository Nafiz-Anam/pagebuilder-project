import { createContext, useState } from "react";

export const PageBuilderContext = createContext();

const PageBuilderProvider = ({ children }) => {
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [width, setWidth] = useState("960px");

  return (
    <PageBuilderContext.Provider
      value={{ activeDevice, setActiveDevice, width, setWidth }}
    >
      {children}
    </PageBuilderContext.Provider>
  );
};

export default PageBuilderProvider;
