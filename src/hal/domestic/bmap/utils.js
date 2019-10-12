
export function PositionToPoint(position) {
  return new window.BMap.Point(position.longitude, position.latitude);
}