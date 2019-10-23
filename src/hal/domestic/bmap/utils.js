
export function PositionToPoint(position) {
  return position && new BMap.Point(position.longitude, position.latitude);
}