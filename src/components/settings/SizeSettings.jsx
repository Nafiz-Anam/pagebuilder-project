import { useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";

const SizeSettings = () => {
  const [width, setWidth] = useState("Auto");
  const [height, setHeight] = useState("Auto");
  const [minWidth, setMinWidth] = useState("Auto");
  const [maxWidth, setMaxWidth] = useState("Auto");
  const [minHeight, setMinHeight] = useState("Auto");
  const [maxHeight, setMaxHeight] = useState("Auto");
  const [overflow, setOverflow] = useState("visible");
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  const handleOverflowChange = (newOverflow) => {
    setOverflow(newOverflow);
    setIsOverflowOpen(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">W</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">H</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Min W</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={minWidth}
            onChange={(e) => setMinWidth(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Max W</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={maxWidth}
            onChange={(e) => setMaxWidth(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Min H</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={minHeight}
            onChange={(e) => setMinHeight(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Max H</span>
          </div>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
            type="text"
            value={maxHeight}
            onChange={(e) => setMaxHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="relative col-span-2">
        <button
          className="relative flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right"
          onClick={() => setIsOverflowOpen(!isOverflowOpen)}
        >
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <span className="text-sm text-gray-400">Overflow</span>
          </div>
          <span className="ml-auto mr-10 flex items-center gap-x-2 text-sm font-semibold leading-6">
            <span>{overflow.charAt(0).toUpperCase() + overflow.slice(1)}</span>
          </span>
          <ChevronDownIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform stroke-current text-gray-400" />
        </button>
        {isOverflowOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg bg-white shadow-lg">
            <ul>
              {["visible", "hidden", "scroll", "auto"].map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleOverflowChange(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeSettings;
