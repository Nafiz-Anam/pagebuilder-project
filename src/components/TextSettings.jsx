import React, { useContext } from "react";
import { PageBuilderContext } from "../context/PageBuilderContext";

const TextSettings = ({ element }) => {
  const { updateElementContent } = useContext(PageBuilderContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateElementContent(element.id, { ...element.content, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Text Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <input
          type="text"
          name="text"
          value={element.content.text || "Edit me"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Font Size
        </label>
        <input
          type="text"
          name="fontSize"
          value={element.content.fontSize || "16px"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <input
          type="color"
          name="color"
          value={element.content.color || "#000000"}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default TextSettings;
