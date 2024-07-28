import React, { useState } from "react";

const TypographySettings = () => {
  const [fontSize, setFontSize] = useState("16px");
  const [fontWeight, setFontWeight] = useState("400");
  const [color, setColor] = useState("#000000");
  const [lineHeight, setLineHeight] = useState("1.5");
  const [letterSpacing, setLetterSpacing] = useState("normal");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Font Size</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Font Weight</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={fontWeight}
            onChange={(e) => setFontWeight(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative flex w-full items-center rounded-xl border border-gray-200 bg-gray-50  py-2 text-right text-sm font-semibold">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Color</span>
          </div>
          <div className="flex flex-1 items-center justify-end pr-4">
            <div
              className="h-8 w-20 cursor-pointer rounded-lg border border-gray-300"
              style={{ backgroundColor: color }}
              onClick={() => document.getElementById("color-picker").click()}
            />
          </div>
          <input
            id="color-picker"
            className="h-0 w-0 opacity-0"
            type="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Line Height</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={lineHeight}
            onChange={(e) => setLineHeight(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Letter Spacing</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TypographySettings;
