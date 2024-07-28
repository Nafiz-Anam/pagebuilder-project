import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import RightSidebar from "../RightSidebar";
import Canvas from "../Canvas";

const Layout = () => {
  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div
      className={`flex bg-gray-100 font-sans text-gray-900 ${
        isPreview ? "h-screen overflow-hidden" : ""
      }`}
    >
      {!isPreview && <Sidebar />}
      <div className="flex h-screen flex-1 flex-col">
        {!isPreview && <Header onPreview={handlePreview} />}
        <Canvas isPreview={isPreview} />
      </div>
      {!isPreview && <RightSidebar />}
      {isPreview && (
        <button
          className="fixed bottom-4 right-4 rounded-full bg-blue-600 px-4 py-2 text-white"
          onClick={handlePreview}
        >
          Back to Builder
        </button>
      )}
    </div>
  );
};

export default Layout;
