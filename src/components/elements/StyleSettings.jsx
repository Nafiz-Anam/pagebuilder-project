import React, { useContext } from "react";
import { PageBuilderContext } from "../../context/PageBuilderContext";

const StyleSettings = ({ element }) => {
  const { updateElementStyle } = useContext(PageBuilderContext);

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    updateElementStyle(element.id, { ...element.style, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Style Settings</h2>
      <div>
        <label className="mb-2 block">
          Width:
          <input
            type="text"
            name="width"
            value={element.style.width}
            onChange={handleStyleChange}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Height:
          <input
            type="text"
            name="height"
            value={element.style.height}
            onChange={handleStyleChange}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Background Color:
          <input
            type="color"
            name="backgroundColor"
            value={element.style.backgroundColor}
            onChange={handleStyleChange}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Margin:
          <input
            type="text"
            name="margin"
            value={element.style.margin}
            onChange={handleStyleChange}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Padding:
          <input
            type="text"
            name="padding"
            value={element.style.padding}
            onChange={handleStyleChange}
            className="w-full rounded border p-2"
          />
        </label>
      </div>
    </div>
  );
};

export default StyleSettings;
