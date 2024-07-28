

const LayersPanel = () => {
  const layers = ["Layer 1", "Layer 2", "Layer 3"];
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Layers</h2>
      <ul>
        {layers.map((layer) => (
          <li
            key={layer}
            className="mb-2 cursor-pointer rounded p-2 hover:bg-gray-200"
          >
            {layer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayersPanel;
