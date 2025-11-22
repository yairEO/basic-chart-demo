import { useState } from "react";
import cx from "classnames";
import {
  DEFAULT_LINE_CONFIG,
  PRESET_COLORS,
} from "../../HorizontalLinesControl.constants";
import { generateLineId, validatePrice } from "../../HorizontalLinesControl.utils";

export default function AddHorizontalLineForm({ onAdd }) {
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(DEFAULT_LINE_CONFIG.color);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceError = validatePrice(price);
    if (priceError) {
      setError(priceError);
      return;
    }

    const newLine = {
      id: generateLineId(),
      price: Number(price),
      title: title.trim() || `Line at ${price}`,
      color: selectedColor,
      lineWidth: DEFAULT_LINE_CONFIG.lineWidth,
      lineStyle: DEFAULT_LINE_CONFIG.lineStyle,
      axisLabelVisible: DEFAULT_LINE_CONFIG.axisLabelVisible,
    };

    onAdd(newLine);

    // Reset form
    setPrice("");
    setTitle("");
    setSelectedColor(DEFAULT_LINE_CONFIG.color);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setError(null);
            }}
            placeholder="Price (e.g. 110.50)"
            className={cx(
              "w-full px-3 py-2 bg-gray-800 border rounded-md text-white placeholder-gray-500",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
              error ? "border-red-500" : "border-gray-700"
            )}
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title (optional)"
            maxLength={20}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {error && <div className="text-red-400 text-sm">{error}</div>}

      <div className="flex items-center gap-2">
        <div className="flex gap-2 flex-1">
          {PRESET_COLORS.map((color) => (
            <button
              key={color.value}
              type="button"
              onClick={() => setSelectedColor(color.value)}
              className={cx(
                "flex-1 h-8 rounded-md border-2 transition-all",
                selectedColor === color.value
                  ? "border-white scale-110"
                  : "border-transparent hover:border-gray-500"
              )}
              style={{ backgroundColor: color.value }}
              title={color.label}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Add Line
      </button>
    </form>
  );
}
