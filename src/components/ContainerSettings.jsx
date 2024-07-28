import React, { useContext } from "react";
import { PageBuilderContext } from "../context/PageBuilderContext";

const ContainerSettings = ({ element }) => {
  const { updateElementContent } = useContext(PageBuilderContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateElementContent(element.id, { ...element.content, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Container Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Background Color
        </label>
        <input
          type="color"
          name="backgroundColor"
          value={element.content.backgroundColor || "#ffffff"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Width</label>
        <input
          type="text"
          name="width"
          value={element.content.width || "100%"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Height
        </label>
        <input
          type="text"
          name="height"
          value={element.content.height || "auto"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default ContainerSettings;
