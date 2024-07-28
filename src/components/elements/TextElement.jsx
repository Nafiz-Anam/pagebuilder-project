import React from "react";
import { useDrag } from "react-dnd";

const TextElement = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { type: "text" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="cursor-move rounded border p-4 text-center shadow"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      Text
    </div>
  );
};

export default TextElement;
