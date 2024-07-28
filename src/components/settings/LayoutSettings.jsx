import React, { useState } from "react";
import AlignBottomIcon from "../../icons/align-bottom.svg?component";
import AlignLeftIcon from "../../icons/align-left.svg?component";
import AlignRightIcon from "../../icons/align-right.svg?component";
import AlignTopIcon from "../../icons/align-top.svg?component";
import AlignStretchIcon from "../../icons/align-stretch.svg?component";
import AlignMiddleIcon from "../../icons/align-middle.svg?component";
import SpaceBetweenIcon from "../../icons/space-between.svg?component";
import SpaceAroundIcon from "../../icons/space-around.svg?component";
import SpaceEvenlyIcon from "../../icons/space-evenly.svg?component";

const LayoutSettings = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("flex-start");

  const isActive = (type, value) => {
    return (
      (type === "justifyContent" && justifyContent === value) ||
      (type === "alignItems" && alignItems === value)
    );
  };

  const buttonClassNames = (type, value) =>
    `rounded-lg border p-2 ${
      isActive(type, value)
        ? "border-blue-500 bg-blue-100 text-blue-500"
        : "border-gray-200 hover:bg-gray-100 text-gray-400"
    }`;

  return (
    <div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-semibold text-gray-700">
          Justify Content
        </div>
        <div className="flex items-center justify-between">
          <button
            className={buttonClassNames("justifyContent", "flex-start")}
            onClick={() => setJustifyContent("flex-start")}
          >
            <AlignLeftIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("justifyContent", "center")}
            onClick={() => setJustifyContent("center")}
          >
            <AlignMiddleIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("justifyContent", "flex-end")}
            onClick={() => setJustifyContent("flex-end")}
          >
            <AlignRightIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("justifyContent", "space-between")}
            onClick={() => setJustifyContent("space-between")}
          >
            <SpaceBetweenIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("justifyContent", "space-around")}
            onClick={() => setJustifyContent("space-around")}
          >
            <SpaceAroundIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("justifyContent", "space-evenly")}
            onClick={() => setJustifyContent("space-evenly")}
          >
            <SpaceEvenlyIcon className="h-5 w-5 stroke-current" />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-sm font-semibold text-gray-700">
          Align Items
        </div>
        <div className="flex items-center justify-between">
          <button
            className={buttonClassNames("alignItems", "flex-start")}
            onClick={() => setAlignItems("flex-start")}
          >
            <AlignTopIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("alignItems", "center")}
            onClick={() => setAlignItems("center")}
          >
            <AlignMiddleIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("alignItems", "flex-end")}
            onClick={() => setAlignItems("flex-end")}
          >
            <AlignBottomIcon className="h-5 w-5 stroke-current" />
          </button>
          <button
            className={buttonClassNames("alignItems", "stretch")}
            onClick={() => setAlignItems("stretch")}
          >
            <AlignStretchIcon className="h-5 w-5 stroke-current" />
          </button>
        </div>
      </div>

      <div
        className="mt-4 h-32 w-full rounded bg-gray-100"
        style={{
          display: "flex",
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <div className="h-10 w-10 rounded bg-blue-500"></div>
      </div>
    </div>
  );
};

export default LayoutSettings;
