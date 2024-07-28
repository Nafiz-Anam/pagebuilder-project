import React, { useState } from "react";

const BorderSettings = () => {
  const [borderRadius, setBorderRadius] = useState("0px");
  const [borderWidth, setBorderWidth] = useState("0px");
  const [borderColor, setBorderColor] = useState("#000000");

  const handleBorderColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Border Radius</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Border Width</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative flex w-full items-center rounded-xl border border-gray-200 bg-gray-50 py-2 text-right text-sm font-semibold">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Border Color</span>
          </div>
          <div className="flex flex-1 items-center justify-end pr-4">
            <div
              className="h-8 w-20 cursor-pointer rounded-lg border border-gray-300"
              style={{ backgroundColor: borderColor }}
              onClick={() =>
                document.getElementById("border-color-picker").click()
              }
            />
          </div>
          <input
            id="border-color-picker"
            className="h-0 w-0 opacity-0"
            type="color"
            value={borderColor}
            onChange={handleBorderColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BorderSettings;
