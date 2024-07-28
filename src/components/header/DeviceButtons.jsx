import React, { useContext } from "react";
import DeviceDesktopIcon from "../../icons/device-desktop.svg?component";
import DeviceTabletIcon from "../../icons/device-tablet.svg?component";
import DeviceMobileIcon from "../../icons/device-mobile.svg?component";
import DeviceMobilerotatedIcon from "../../icons/device-mobile-rotated.svg?component";
import { PageBuilderContext } from "../../context/PageBuilderContext";

const DeviceButtons = () => {
  const { activeDevice, setActiveDevice } = useContext(PageBuilderContext);
  return (
    <div className="flex items-center gap-x-3">
      <button
        className={`rounded-xl p-2 ${
          activeDevice === "desktop"
            ? "bg-gray-100 text-blue-600"
            : "text-gray-400 hover:bg-gray-100"
        }`}
        onClick={() => setActiveDevice("desktop")}
      >
        <DeviceDesktopIcon className="h-6 w-6 stroke-current" />
      </button>
      <button
        className={`rounded-xl p-2 ${
          activeDevice === "tablet"
            ? "bg-gray-100 text-blue-600"
            : "text-gray-400 hover:bg-gray-100"
        }`}
        onClick={() => setActiveDevice("tablet")}
      >
        <DeviceTabletIcon className="h-6 w-6 stroke-current" />
      </button>
      <button
        className={`rounded-xl p-2 ${
          activeDevice === "mobile"
            ? "bg-gray-100 text-blue-600"
            : "text-gray-400 hover:bg-gray-100"
        }`}
        onClick={() => setActiveDevice("mobile")}
      >
        <DeviceMobileIcon className="h-6 w-6 stroke-current" />
      </button>
      <button
        className={`rounded-xl p-2 ${
          activeDevice === "mobile-rotated"
            ? "bg-gray-100 text-blue-600"
            : "text-gray-400 hover:bg-gray-100"
        }`}
        onClick={() => setActiveDevice("mobile-rotated")}
      >
        <DeviceMobilerotatedIcon className="h-6 w-6 stroke-current" />
      </button>
    </div>
  );
};

export default DeviceButtons;
