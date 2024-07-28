import { useState } from "react";
import LogoIcon from "../icons/logo.svg?component";
import SquarePlusIcon from "../icons/square-plus.svg?component";
import LayoutIcon from "../icons/layout.svg?component";
import PaletteIcon from "../icons/palette.svg?component";
import FileIcon from "../icons/file.svg?component";
import ImageIcon from "../icons/image.svg?component";
import AlertCircleIcon from "../icons/alert-circle.svg?component";
import SettingsIcon from "../icons/settings.svg?component";
import Tooltip from "./Tooltip";

const Sidebar = ({ setRightSidebarView }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuClick = (item) => {
    if (activeItem === item) {
      setActiveItem(null);
      setRightSidebarView("layers");
    } else {
      setActiveItem(item);
      setRightSidebarView(item === "add-elements" ? "elements" : "layers");
    }
  };

  const menuItems = [
    {
      id: "add-elements",
      icon: <SquarePlusIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Add elements (A)",
    },
    {
      id: "layouts",
      icon: <LayoutIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Layouts (Y)",
    },
    {
      id: "themes",
      icon: <PaletteIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Themes (T)",
    },
    {
      id: "assets",
      icon: <FileIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Assets (S)",
    },
    {
      id: "images",
      icon: <ImageIcon className="h-6 w-6 fill-current" />,
      tooltip: "Images (I)",
    },
  ];

  const settingsItems = [
    {
      id: "help",
      icon: <AlertCircleIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Help (H)",
    },
    {
      id: "settings",
      icon: <SettingsIcon className="h-6 w-6 stroke-current" />,
      tooltip: "Settings (T)",
    },
  ];

  return (
    <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
      <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
        <LogoIcon />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`group relative rounded-xl p-2 ${
              activeItem === item.id
                ? "bg-gray-100 text-blue-600"
                : "text-gray-400 hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.icon}
            <Tooltip>{item.tooltip}</Tooltip>
          </a>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-10">
        {settingsItems.map((item) => (
          <button
            key={item.id}
            className={`group relative rounded-xl p-2 ${
              activeItem === item.id
                ? "bg-gray-100 text-blue-600"
                : "text-gray-400 hover:bg-gray-100"
            }`}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.icon}
            <Tooltip>{item.tooltip}</Tooltip>
          </button>
        ))}
        <button className="mt-2 rounded-full bg-gray-100">
          <img
            className="h-10 w-10 object-cover"
            src="/img/avatar.png"
            alt="User avatar"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
