import { useContext } from "react";
import BackButton from "./header/BackButton";
import PageSelector from "./header/PageSelector";
import PreviewButton from "./header/PreviewButton";
import DeviceButtons from "./header/DeviceButtons";
import WidthSelector from "./header/WidthSelector";
import PackageButton from "./header/PackageButton";
import { PageBuilderContext } from "../context/PageBuilderContext";

const Header = () => {
  const { activeDevice, setActiveDevice, width, setWidth } =
    useContext(PageBuilderContext);

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handlePreview = () => {
    console.log("Preview button clicked");
  };

  const handlePackageClick = () => {
    console.log("Package button clicked");
  };

  return (
    <header className="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
      <BackButton onClick={handleBackClick} />
      <PageSelector page="Homepage - Dipa" url="https://dipainhouse.com/" />
      <PreviewButton onPreview={handlePreview} />
      <div className="h-full w-px bg-gray-200" />
      <DeviceButtons
        activeDevice={activeDevice}
        setActiveDevice={setActiveDevice}
      />
      <div className="h-full w-px bg-gray-200" />
      <WidthSelector width={width} setWidth={setWidth} />
      <PackageButton onClick={handlePackageClick} />
    </header>
  );
};

export default Header;
