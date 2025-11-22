import { useState } from "react";
import HorizontalLinesControl from "./components/HorizontalLinesControl/HorizontalLinesControl";
import TradeChart from "./components/TradeChart/TradeChart";

export default function App() {
  const [horizontalLines, setHorizontalLines] = useState([
    {
      id: "default-1",
      price: 110,
      title: "Target",
      color: "#f59e0b",
      lineWidth: 2,
      lineStyle: 2,
      axisLabelVisible: true,
    },
  ]);

  const handleAddLine = (newLine) => {
    setHorizontalLines((prev) => [...prev, newLine]);
  };

  const handleDeleteLine = (lineId) => {
    setHorizontalLines((prev) => prev.filter((line) => line.id !== lineId));
  };

  return (
    <div className="h-screen bg-gray-950 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white">Live Trades</h1>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-5">
          <TradeChart
            className="rounded-lg shadow-xl"
            horizontalLines={horizontalLines}
          />
        </div>

        <div className="lg:col-span-1">
          <HorizontalLinesControl
            lines={horizontalLines}
            onAddLine={handleAddLine}
            onDeleteLine={handleDeleteLine}
          />
        </div>
      </div>
    </div>
  );
}
