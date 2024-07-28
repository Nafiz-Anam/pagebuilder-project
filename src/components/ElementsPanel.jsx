const ElementsPanel = () => {
  const elements = ["Container", "Text", "Image", "Heading", "Link"];
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Available Elements</h2>
      <ul>
        {elements.map((element) => (
          <li
            key={element}
            className="mb-2 cursor-pointer rounded p-2 hover:bg-gray-200"
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElementsPanel;
