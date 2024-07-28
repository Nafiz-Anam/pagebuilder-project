import React from "react";
import ContainerElement from "./elements/ContainerElement";
import TextElement from "./elements/TextElement";

const ElementsPanel = () => {
  const elements = [
    { component: <ContainerElement />, name: "Container" },
    { component: <TextElement />, name: "Text" },
    // Add more elements here as needed
  ];

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Available Elements</h2>
      <div className="grid grid-cols-2 gap-4">
        {elements.map((element) => (
          <div
            key={element.name}
            className="mb-2 cursor-pointer rounded p-2 hover:bg-gray-200"
          >
            {element.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementsPanel;
