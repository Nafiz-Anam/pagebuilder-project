import React, { useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";

const BackgroundSettings = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundSize, setBackgroundSize] = useState("cover");
  const [isBackgroundSizeOpen, setIsBackgroundSizeOpen] = useState(false);

  const handleBackgroundSizeChange = (newSize) => {
    setBackgroundSize(newSize);
    setIsBackgroundSizeOpen(false);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <div className="relative flex w-full items-center rounded-xl border border-gray-200 bg-gray-50 py-2 text-right text-sm font-semibold">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Color</span>
          </div>
          <div className="flex flex-1 items-center justify-end pr-4">
            <div
              className="h-8 w-20 cursor-pointer rounded-lg border border-gray-300"
              style={{ backgroundColor: backgroundColor }}
              onClick={() =>
                document.getElementById("background-color-picker").click()
              }
            />
          </div>
          <input
            id="background-color-picker"
            className="h-0 w-0 opacity-0"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Image</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-20 pr-4 text-right text-sm font-semibold leading-6"
            type="text"
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
            placeholder="Image URL"
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <button
            className="relative flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 pl-24 pr-10 text-right"
            onClick={() => setIsBackgroundSizeOpen(!isBackgroundSizeOpen)}
          >
            <div className="absolute inset-y-0 left-0 flex items-center px-4">
              <span className="text-sm text-gray-400">Size</span>
            </div>
            <span className="ml-auto flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
              <span>
                {backgroundSize.charAt(0).toUpperCase() +
                  backgroundSize.slice(1)}
              </span>
            </span>
            <ChevronDownIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform stroke-current text-gray-400" />
          </button>
          {isBackgroundSizeOpen && (
            <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg bg-white shadow-lg">
              <ul>
                {["cover", "contain", "auto"].map((option) => (
                  <li
                    key={option}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleBackgroundSizeChange(option)}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSettings;
