import React from "react";
import { useDrag } from "react-dnd";

const ContainerElement = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "container",
    item: { type: "container" },
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
      Container
    </div>
  );
};

export default ContainerElement;
