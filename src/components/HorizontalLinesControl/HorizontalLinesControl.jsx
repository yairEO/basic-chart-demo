import AddHorizontalLineForm from "./components/AddHorizontalLineForm/AddHorizontalLineForm";
import HorizontalLinesList from "./components/HorizontalLinesList/HorizontalLinesList";

export default function HorizontalLinesControl({ lines, onAddLine, onDeleteLine }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Horizontal Lines</h2>
        <p className="text-gray-400 text-sm">
          Add price levels to visualize targets, support, and resistance
        </p>
      </div>

      <HorizontalLinesList lines={lines} onDeleteLine={onDeleteLine} />

      <div className="pt-4 border-t border-gray-800">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Add New Line</h3>
        <AddHorizontalLineForm onAdd={onAddLine} />
      </div>
    </div>
  );
}
