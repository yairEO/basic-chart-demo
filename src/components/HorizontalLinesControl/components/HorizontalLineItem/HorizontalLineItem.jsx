export default function HorizontalLineItem({ line, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-750 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        <div
          className="w-4 h-4 rounded"
          style={{ backgroundColor: line.color }}
          title={`Color: ${line.color}`}
        />

        <div className="flex-1 min-w-0">
          <div className="text-white font-medium truncate">{line.title}</div>
          <div className="text-gray-400 text-sm">Price: {line.price.toFixed(2)}</div>
        </div>
      </div>

      <button
        onClick={() => onDelete(line.id)}
        className="ml-3 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label={`Delete line ${line.title}`}
      >
        Delete
      </button>
    </div>
  );
}
