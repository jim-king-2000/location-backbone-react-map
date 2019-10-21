
export function PositionToPoint(position) {
  return new BMap.Point(position.longitude, position.latitude);
}