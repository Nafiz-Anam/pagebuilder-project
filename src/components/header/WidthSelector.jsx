import { useContext, useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";
import { PageBuilderContext } from "../../context/PageBuilderContext";

const zoomLevels = ["100%", "75%", "50%", "25%"];

const WidthSelector = () => {
  const { zoomLevel, setZoomLevel } = useContext(PageBuilderContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleZoomChange = (newZoom) => {
    setZoomLevel(newZoom);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2"
        onClick={toggleDropdown}
      >
        <span className="text-sm font-semibold leading-6">{zoomLevel}</span>
        <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg bg-white shadow-lg">
          <ul>
            {zoomLevels.map((level) => (
              <li
                key={level}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleZoomChange(level)}
              >
                {level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WidthSelector;
