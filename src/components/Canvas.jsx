import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { PageBuilderContext } from "../context/PageBuilderContext";

const deviceStyles = {
  desktop: { maxWidth: "100%" },
  tablet: { maxWidth: "768px" },
  mobile: { maxWidth: "375px" },
  "mobile-rotated": { maxWidth: "667px" },
};

const Canvas = ({ isPreview }) => {
  const {
    activeDevice,
    zoomLevel,
    elements,
    addElementToCanvas,
    updateElementContent,
  } = useContext(PageBuilderContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["container", "text"],
    drop: (item) => addElementToCanvas(item.type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const scale = parseInt(zoomLevel) / 100;
  const style = {
    ...deviceStyles[activeDevice],
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    margin: "0 auto",
    height: `${100 / scale}%`,
    background: isOver ? "rgba(255, 255, 255, 0.7)" : "#f0f0f0", // Light overlay when dragging
  };

  return (
    <main className={`flex-1 overflow-y-auto ${!isPreview && "p-12"}`}>
      <div
        ref={drop}
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            ...style,
            padding: isPreview ? "0" : "3rem 0",
            position: "relative",
            width: "100%",
            border: isOver ? "2px dashed #4A90E2" : "2px dashed #d3d3d3", // Modern dashed border
            transition: "border 0.2s ease, background 0.2s ease", // Smooth transitions
          }}
        >
          {elements.map((element) => (
            <div
              key={element.id}
              className="m-2 rounded border bg-white p-4 shadow"
            >
              {element.type === "container" && <div>Container</div>}
              {element.type === "text" && (
                <input
                  type="text"
                  value={element.content}
                  onChange={(e) =>
                    updateElementContent(element.id, e.target.value)
                  }
                  className="w-full border-none outline-none"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Canvas;
