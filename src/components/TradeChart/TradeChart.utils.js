import { MARKER_COLORS, SECONDS_IN_DAY } from './TradeChart.constants';

export function generateMockTradeData() {
  const now = Math.floor(Date.now() / 1000);

  return [
    { time: now - SECONDS_IN_DAY * 2, value: 100 }, // 2 days ago
    { time: now - SECONDS_IN_DAY, value: 115 },     // 1 day ago
    { time: now, value: 108 },                       // now
  ];
}

export function generateTradeMarkers() {
  const now = Math.floor(Date.now() / 1000);

  return [
    {
      time: now - SECONDS_IN_DAY * 2,
      position: 'belowBar',
      color: MARKER_COLORS.buy,
      shape: 'arrowUp',
      text: 'BUY',
    },
    {
      time: now - SECONDS_IN_DAY,
      position: 'aboveBar',
      color: MARKER_COLORS.sell,
      shape: 'arrowDown',
      text: 'SELL',
    },
    {
      time: now,
      position: 'belowBar',
      color: MARKER_COLORS.buy,
      shape: 'arrowUp',
      text: 'BUY',
    },
  ];
}

