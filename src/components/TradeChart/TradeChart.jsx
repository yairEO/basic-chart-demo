import cx from "classnames";
import { useTradeChart } from "./TradeChart.hooks";

export default function TradeChart({ className, horizontalLines = [] }) {
  const { chartContainerRef } = useTradeChart(horizontalLines);

  return <div ref={chartContainerRef} className={cx("w-full h-full", className)} />;
}
