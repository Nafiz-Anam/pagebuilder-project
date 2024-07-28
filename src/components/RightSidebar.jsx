import ChevronDownIcon from "../icons/chevron-down.svg?component";
import DeviceDesktopIcon from "../icons/device-desktop.svg?component";
import UsersIcon from "../icons/users.svg?component";
import Accordion from "./Accordion";
import LayoutSettings from "./settings/LayoutSettings";
import SpacingSettings from "./settings/SpacingSettings";
import SizeSettings from "./settings/SizeSettings";
import TypographySettings from "./settings/TypographySettings";
import PositionSettings from "./settings/PositionSettings";
import BorderSettings from "./settings/BorderSettings";
import BackgroundSettings from "./settings/BackgroundSettings";

const RightSidebar = () => {
  return (
    <aside className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
      <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <UsersIcon className="h-5 w-5 stroke-current text-gray-400" />
          <span className="text-sm font-semibold leading-6">Invite</span>
        </button>
        <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
          Publish
        </button>
      </div>
      <div className="flex flex-1 flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <span className="text-sm font-semibold">Selector</span>
          <span className="text-sm text-gray-400">
            Inheriting{" "}
            <span className="text-sm font-medium text-gray-900">
              2 Selectors
            </span>
          </span>
        </div>
        <div className="border-b border-gray-200 px-6 py-4">
          <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
            <div className="flex items-center gap-x-2">
              <span className="rounded-lg bg-white p-1 shadow">
                <DeviceDesktopIcon className="h-5 w-5 stroke-current text-blue-600" />
              </span>
              <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                H1 - hero_title
              </span>
            </div>
            <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
          </button>
          <div className="mt-2 text-xs text-gray-400">
            1 on this page, 7 on other pages
          </div>
        </div>
        <Accordion title="Layout">
          <LayoutSettings />
        </Accordion>
        <Accordion title="Spacing">
          <SpacingSettings />
        </Accordion>
        <Accordion title="Size">
          <SizeSettings />
        </Accordion>
        <Accordion title="Typography">
          <TypographySettings />
        </Accordion>
        <Accordion title="Position">
          <PositionSettings />
        </Accordion>
        <Accordion title="Border">
          <BorderSettings />
        </Accordion>
        <Accordion title="Background">
          <BackgroundSettings />
        </Accordion>
      </div>
    </aside>
  );
};

export default RightSidebar;
