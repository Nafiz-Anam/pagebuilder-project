import React from "react";
import PackageIcon from "../../icons/package.svg?component";

const PackageButton = ({ onClick }) => (
  <button
    className="flex items-center justify-center rounded-xl bg-gray-100 p-2"
    onClick={onClick}
  >
    <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
  </button>
);

export default PackageButton;
