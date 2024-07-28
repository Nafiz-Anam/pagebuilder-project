import React, { useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";

const PositionSettings = () => {
  const [position, setPosition] = useState("static");
  const [zIndex, setZIndex] = useState("0");
  const [isPositionOpen, setIsPositionOpen] = useState(false);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
    setIsPositionOpen(false);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative">
        <button
          className="relative flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 pl-24 pr-3 text-right"
          onClick={() => setIsPositionOpen(!isPositionOpen)}
        >
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Position</span>
          </div>
          <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
            <span>{position.charAt(0).toUpperCase() + position.slice(1)}</span>
          </span>
          <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
        </button>
        {isPositionOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg bg-white shadow-lg">
            <ul>
              {["static", "relative", "absolute", "fixed", "sticky"].map(
                (option) => (
                  <li
                    key={option}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handlePositionChange(option)}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center px-4">
          <span className="text-sm text-gray-400">Z-Index</span>
        </div>
        <input
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-24 pr-4 text-right text-sm font-semibold leading-6"
          type="text"
          value={zIndex}
          onChange={(e) => setZIndex(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PositionSettings;
