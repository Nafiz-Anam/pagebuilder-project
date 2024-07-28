import { useState } from "react";
import ChevronDownIcon from "../../icons/chevron-down.svg?component";

const PageSelector = ({ page, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex flex-col items-start rounded-xl border border-gray-200 bg-gray-100 px-6 py-2"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-x-2">
          <span className="text-sm">Page: {page}</span>
          <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
        </div>
        <div className="text-xs text-gray-400">{url}</div>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full rounded-lg bg-white shadow-lg z-50">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100">Page 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Page 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Page 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageSelector;
