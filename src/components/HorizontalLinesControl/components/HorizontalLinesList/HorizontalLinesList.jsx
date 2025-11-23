import HorizontalLineItem from "../HorizontalLineItem/HorizontalLineItem";

export default function HorizontalLinesList({ lines, onDeleteLine }) {
  if (lines.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No horizontal lines added yet. Add one below to get started.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {lines.map((line) => (
        <HorizontalLineItem key={line.id} line={line} onDelete={onDeleteLine} />
      ))}
    </div>
  );
}
