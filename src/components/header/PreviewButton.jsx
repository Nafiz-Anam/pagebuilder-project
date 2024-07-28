import React from "react";
import EyeIcon from "../../icons/eye.svg?component";

const PreviewButton = ({ onPreview }) => (
  <button
    className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2"
    onClick={onPreview}
  >
    <EyeIcon className="h-6 w-6 stroke-current text-gray-400" />
    <span className="text-sm font-semibold leading-6">Preview</span>
  </button>
);

export default PreviewButton;
