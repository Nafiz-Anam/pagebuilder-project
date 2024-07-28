import { useContext, useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";
import { PageBuilderContext } from "../../context/PageBuilderContext";

const WidthSelector = () => {
  const { width, setWidth } = useContext(PageBuilderContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2"
        onClick={toggleDropdown}
      >
        <span className="text-sm font-semibold leading-6">{width}</span>
        <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full rounded-lg bg-white shadow-lg">
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => handleWidthChange("960 PX / 100%")}
            >
              960 PX / 100%
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => handleWidthChange("1200 PX / 75%")}
            >
              1200 PX / 75%
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => handleWidthChange("1440 PX / 50%")}
            >
              1440 PX / 50%
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WidthSelector;
