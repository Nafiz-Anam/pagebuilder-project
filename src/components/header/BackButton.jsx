import React from "react";
import ChevronLeftIcon from "../../icons/chevron-left.svg?component";

const BackButton = ({ onClick }) => (
  <button
    className="flex items-center justify-center rounded-xl bg-gray-100 p-2"
    onClick={onClick}
  >
    <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
  </button>
);

export default BackButton;
