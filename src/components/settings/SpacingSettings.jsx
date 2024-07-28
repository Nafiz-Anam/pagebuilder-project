import { useState } from "react";

const SpacingSettings = () => {
  const [topMargin, setTopMargin] = useState(20);
  const [rightMargin, setRightMargin] = useState(20);
  const [bottomMargin, setBottomMargin] = useState(20);
  const [leftMargin, setLeftMargin] = useState(20);

  const [topPadding, setTopPadding] = useState(10);
  const [rightPadding, setRightPadding] = useState(10);
  const [bottomPadding, setBottomPadding] = useState(10);
  const [leftPadding, setLeftPadding] = useState(10);

  return (
    <div className="relative flex items-center rounded-xl border-2 border-dashed border-gray-200 px-12 py-10">
      <span className="absolute left-2 top-2 text-[10px] uppercase text-gray-400">
        Margin
      </span>
      <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
        Padding
      </span>
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={topMargin}
            onChange={(e) => setTopMargin(e.target.value)}
          />
          <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={topPadding}
            onChange={(e) => setTopPadding(e.target.value)}
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={rightMargin}
            onChange={(e) => setRightMargin(e.target.value)}
          />
          <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={rightPadding}
            onChange={(e) => setRightPadding(e.target.value)}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={bottomPadding}
            onChange={(e) => setBottomPadding(e.target.value)}
          />
          <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={bottomMargin}
            onChange={(e) => setBottomMargin(e.target.value)}
          />
        </div>
        <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={leftMargin}
            onChange={(e) => setLeftMargin(e.target.value)}
          />
          <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
          <input
            className="h-4 w-4 text-center text-sm outline-none"
            value={leftPadding}
            onChange={(e) => setLeftPadding(e.target.value)}
          />
        </div>
        <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
          <div className="h-full w-full rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SpacingSettings;
