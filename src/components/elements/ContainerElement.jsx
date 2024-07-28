import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useContext } from "react";
import { PageBuilderContext } from "../../context/PageBuilderContext";

const ContainerElement = ({ id, style = {}, children }) => {
  const { updateElementStyle, addElementToContainer, setSelectedElement } =
    useContext(PageBuilderContext);

  const defaultStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#ffffff",
    margin: "0",
    padding: "0",
  };

  const mergedStyle = { ...defaultStyle, ...style };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "container",
    item: { id, type: "container" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["text", "container"],
    drop: (item) => addElementToContainer(id, item.type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleClick = () => {
    setSelectedElement({ id, type: "container" });
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="relative m-2 cursor-pointer rounded border p-4 shadow"
      style={{
        ...mergedStyle,
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver
          ? "rgba(0,0,0,0.1)"
          : mergedStyle.backgroundColor,
      }}
      onClick={handleClick}
    >
      <div className="text-center">Container</div>
      {children}
    </div>
  );
};

export default ContainerElement;
