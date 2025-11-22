import { useEffect, useRef } from "react";
import { createChart, createSeriesMarkers, LineSeries } from "lightweight-charts";
import { CHART_CONFIG, LINE_SERIES_CONFIG } from "./TradeChart.constants";
import { generateMockTradeData, generateTradeMarkers } from "./TradeChart.utils";

export function useTradeMarkers() {
  // TODO: Replace with actual API call
  // This will eventually fetch real trade data from the server
  return generateTradeMarkers();
}

export function useTradeChart(horizontalLines = []) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const lineSeriesRef = useRef(null);
  const priceLineRefs = useRef([]);
  const markers = useTradeMarkers();

  // Chart initialization - runs once
  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart with autoSize enabled
    const chart = createChart(chartContainerRef.current, {
      ...CHART_CONFIG,
      autoSize: true,
    });

    chartRef.current = chart;

    // Create line series
    const lineSeries = chart.addSeries(LineSeries, LINE_SERIES_CONFIG);
    lineSeriesRef.current = lineSeries;

    // Set mock data
    const mockData = generateMockTradeData();
    lineSeries.setData(mockData);

    // Add markers for buy/sell events
    createSeriesMarkers(lineSeries, markers);

    // Fit content to visible area
    chart.timeScale().fitContent();

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        lineSeriesRef.current = null;
        priceLineRefs.current = [];
      }
    };
  }, [markers]);

  // Horizontal lines management - runs when lines change
  useEffect(() => {
    if (!lineSeriesRef.current) return;

    // Remove all existing price lines
    priceLineRefs.current.forEach((priceLine) => {
      lineSeriesRef.current.removePriceLine(priceLine);
    });
    priceLineRefs.current = [];

    // Add new price lines
    horizontalLines.forEach((lineConfig) => {
      const priceLine = lineSeriesRef.current.createPriceLine(lineConfig);
      priceLineRefs.current.push(priceLine);
    });
  }, [horizontalLines]);

  return { chartContainerRef };
}
